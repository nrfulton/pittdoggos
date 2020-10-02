# Pittsburgh Doggos Scripts

[Original datasets are here](https://catalog.data.gov/dataset/allegheny-county-dog-licenses/resource/c189c9ad-7f20-4686-ae22-b534af7ad092)

The 2099 dataset are lifetime registrations:

    wget https://data.wprdc.org/datastore/dump/f8ab32f7-44c7-43ca-98bf-c1b444724598

And the 2020 dataset are one year registrations:

    wget https://data.wprdc.org/datastore/dump/75e867fe-3154-4be8-a7f3-5909653e5c06

My `2020_and_2099.csv` contains all 2020 and lifetime registrations (might be overlap?).
Literally just appending to 2020 data:

    cat 2099.csv >> 2020.csv

The `2018_all_unique.csv` file is just the unique lines from those two files using `unqiue.py`.

`doggos.py` does the data merging that gives the tables in the blog post.
