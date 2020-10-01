# Pittsburgh Doggos Scripts

[Original datasets are here](https://catalog.data.gov/dataset/allegheny-county-dog-licenses/resource/c189c9ad-7f20-4686-ae22-b534af7ad092)

The 2099 dataset are lifetime regirations:

    wget https://data.wprdc.org/dataset/ad5bd3d6-1b53-4ed0-8cd9-157a985bd0bd/resource/f8ab32f7-44c7-43ca-98bf-c1b444724598/download/2099.csv

And the 2018 dataset are one year registrations:

    wget https://data.wprdc.org/dataset/ad5bd3d6-1b53-4ed0-8cd9-157a985bd0bd/resource/53211313-01c9-46e2-b520-a5748a10fd7c/download/2018.csv

My `2018_and_2099.csv` contains all 2018 and lifetime registrations (might be overlap).
Literally just:

    cat 2099.csv >> 2018.csv

The `2018_all_unique.csv` file is just the unique lines from those two files using `unqiue.py`.

`doggos.py` does the data munging that gives the tables in the blog post.
