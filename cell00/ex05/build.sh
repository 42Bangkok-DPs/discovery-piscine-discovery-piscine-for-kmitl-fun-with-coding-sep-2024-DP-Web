if [ $# -eq 0 ]; then
    echo "No arguments supplied"
    exit 0
fi

for arg in "$@"; do
    mkdir "ex$arg"
done
