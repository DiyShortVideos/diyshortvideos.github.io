
# Plumlytics Website

Using Metalsmith(http://www.metalsmith.io/) to make a static site.


# Build

To compile run,

```
make build
```

Then push to Github

# How to use the page generator from a csv file

1. Create a csv file in the directory `campaigns_csv`
   (ex: `campaigns_csv/campaign_1.csv`)

   With content:

   ```
   url,layout_name,content-1,content-2,content-3
   url-1,mylayout.html,Hello,world,!
   ```

2. Make sure `layouts/mylayout.html` exists.

3. Create a new file in src `src/campaign_1.md` (the name here doesn't matter at all)

   With content:

   ```
   ---
   json_files:
       source_file: campaign_1
       filename_pattern: campaign-1/:data.url
       layout_pattern: :data.layout_name
       as_permalink: true
   ---
   ```

   Where:

   - `source_file: campaign_1`: `campaign_1` is the same name as the csv with extension striped
   - `file_name_pattern: campaign/:data.url`: `campaign/` can be customized it's used to generate the file under a common folder, `:data.url` should not be changed, it will be replaces by the `url` column from the csv.
   - `layout_pattern: :data.layout_name`: should not be changed, it will use the `layout_name` column from the csv file
   - `as_permalink: true`: should not be changed

4. Run `make build` as usual and it will:

  - Transform the `campaigns_csv/*.csv` files to `json/*.json` keeping the name
  - For each line in the CSVs file referenced in a template in `src/*.md` generate a page based on the configuration
# ubersales.github.io
