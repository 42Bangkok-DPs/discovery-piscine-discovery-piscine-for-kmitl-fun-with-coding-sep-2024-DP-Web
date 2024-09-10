if [ $# -eq 0 ]; then
    echo "No arguments supplied"
    exit 0
fi

for var in "$@"
do
    echo "$var"
done

