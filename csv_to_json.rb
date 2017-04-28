#!/usr/bin/ruby
require "fileutils"
require "csv"
require "json"

FileUtils.mkdir_p "./json"

Dir.glob("./campaigns_csv/*.csv").each do |csv_file|
  csv = CSV.read csv_file, headers: true
  basename = File.basename csv_file, ".csv"
  File.write "./json/#{basename}.json", csv.map(&:to_hash).to_json
end
