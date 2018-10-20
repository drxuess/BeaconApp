dir='../data/FIRMS/c6/Australia_NewZealand/'

rm -rf ../data/

wget -e robots=off -m -np -R .html,.tmp -nH --cut-dirs=4 "https://nrt4.modaps.eosdis.nasa.gov/api/v2/files/contents/FIRMS/c6/Australia_NewZealand" --header "Authorization: Bearer B44112B0-D42E-11E8-A6EB-CF089B439298" -P  wget -e robots=off -m -np -R .html,.tmp -nH --cut-dirs=4 "https://nrt4.modaps.eosdis.nasa.gov/api/v2/files/contents/FIRMS/c6/Australia_NewZealand" --header "Authorization: Bearer B44112B0-D42E-11E8-A6EB-CF089B439298" -P ../data

newest=$(ls -1 $dir | tail -n 1)

echo $newest

