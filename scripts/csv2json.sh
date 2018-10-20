#!/bin/bash

# CSV to JSON converter using BASH
# original script from https://gist.github.com/dsliberty/3de707bc656cf757a0cb
# Usage ./csv2json.sh input.csv > output.json

shopt -s extglob

input="${1:-/dev/stdin}"
SEP=","

[ -z "${input}" ] && printf "No CSV input file specified" && exit 1
[ ! -e "${input}" ] && printf "Unable to locate ${input}" && exit 1

data=$(sed '/^$/d' "${input}")
line_count=$(printf "${data}" | wc -l)

printf "[\n"
row=0
while IFS=$'\n\r' read -r line; do
    if [[ ${row} -eq 0 ]]; then
        IFS="$SEP" read -ra head_items <<< "${line}"
    else
        IFS="$SEP" read -ra line_items <<< "${line}"
        printf "\t{\n"
        col=0
        for item in "${line_items[@]}"; do
            printf  "\t\t\"${head_items[${col}]}\": "
            case ${item} in
                \"\")
                    printf "null"
                    ;;
                \"*\")
                    printf "${item}"
                    ;;
                *.*.*.*)
                    printf "\"${item}\""
                    ;;
                null|true|false|+([0-9.]))
                    printf "${item}"
                    ;;
                *)
                    printf "\"${item}\""
                    ;;
            esac
            (( col++ ))
            [[ ${col} -lt ${#head_items[@]} ]] && printf ",\n" || printf "\n"
        done
        printf "\t}"
        [[ ${row} -lt ${line_count} ]] && printf ",\n" || printf "\n"
    fi
    (( row++ ))
done <<< "${data}"
printf "]"