var app = angular.module('DemoApp', []);

app.controller('DemoController', function ($scope, $timeout) {
  const TIMESERIES = {
    // confirmed_us: 'https://github.com/CSSEGISandData/COVID-19/raw/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_US.csv',
    // confirmed_global: 'https://github.com/CSSEGISandData/COVID-19/raw/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv',
    // deaths_us: 'https://github.com/CSSEGISandData/COVID-19/raw/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_US.csv',
    // deaths_global: 'https://github.com/CSSEGISandData/COVID-19/raw/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv',
    // recovered_global: 'https://github.com/CSSEGISandData/COVID-19/raw/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv',
    // tests_us: 'https://covidtracking.com/api/v1/us/daily.csv',
    // tests_us_states: 'https://covidtracking.com/api/v1/states/daily.csv',
    confirmed_us: './csv/time_series_covid19_confirmed_US.csv',
    // confirmed_global: './csv/time_series_covid19_confirmed_global.csv',
    deaths_us: './csv/time_series_covid19_deaths_US.csv',
    // deaths_global: './csv/time_series_covid19_deaths_global.csv',
    // recovered_global: './csv/time_series_covid19_deaths_global.csv',
    // tests_us: './csv/daily.csv',
    tests_us_states: './csv/states_daily.csv'
  }

  const SeriesOfEvents = [
    {
      date: "01/21/20",
      text: "The United States announced its first confirmed coronavirus case — a man in his 30s in Washington state."
    },
    {
      date: "02/11/20",
      text: "WHO announced that the disease caused by the new coronavirus will be known by the official name of COVID-19."
    },
    {
      date: "02/24/20",
      text: "The U.S. stock market plummeted over coronavirus fears, after the Dow Jones Industrial Average experienced the worst day in two years."
    },
    {date: "02/26/20", text: "California announced the first case in the U.S. with no clear source of exposure."},
    {
      date: "03/06/20",
      text: "Vice President Mike Pence announced that 21 people aboard the Grand Princess, a cruise ship being held off the coast of California, tested positive for the coronavirus."
    },
    {date: "03/08/20", text: "Confirmed cases in the U.S. topped 500."},
    {
      date: "03/11/20",
      text: "President Trump announced a new restriction on many foreign travelers from 26 countries in Europe, except for Ireland and the United Kingdom, for the next 30 days."
    },
    {
      date: "03/13/20",
      text: "Trump declared a national state of emergency that could free up $50 billion to help fight the pandemic."
    },
    {
      date: "03/15/20",
      text: "Twenty-nine additional states, including New York, Massachusetts, South Carolina and Hawaii, announced school closures."
    },
    {
      date: "03/19/20",
      text: "California issued a statewide stay-at-home order asking residents to only leave the house if necessary."
    },
    {
      date: "03/20/20",
      text: "New York Mayor Bill de Blasio said the nation's largest city is “now the epicenter of this crisis” in the U.S., with 5,151 coronavirus cases and 29 deaths."
    },
    {date: "03/21/20", text: "Coronavirus cases in New York State, the hardest-hit in the U.S., surpassed 10,000."},
    {
      date: "03/23/20",
      text: "New York Gov. Andrew Cuomo announced the state will begin three studies of potential coronavirus treatments in the coming week, as the state’s number of confirmed cases grew to more than 20,000."
    },
    {date: "03/24/20", text: "Coronavirus cases topped 50,000 in the U.S., with 637 deaths nationwide."},
    {
      date: "03/26/20",
      text: "Deaths in the U.S. passed 1,000, as confirmed cases nationwide rose to more than 68,100."
    },
    {
      date: "03/27/20",
      text: "Coronavirus cases in the U.S. surpassed 100,000, the most in the world. More than 1,500 deaths were also reported nationwide."
    },
    {
      date: "03/28/20",
      text: "The U.S. death toll surpassed 2,000, as the number of cases nationwide rose to more than 102,000."
    },
    {date: "04/02/20", text: "Deaths in New York surpassed 2,000, while confirmed cases rose to 92,381."},
    {
      date: "04/03/20",
      text: "Death toll in the U.S. climbed to more than 7,000, as the number of confirmed cases nationwide rose to more than 275,500."
    },
    {date: "04/06/20", text: "The coronavirus death toll in the U.S. surged past 10,000."},
    {date: "04/11/20", text: "Coronavirus deaths in the United States passed the 20,000 mark."},
    {
      date: "04/16/20",
      text: "President Donald Trump announced new federal guidelines for reopening the U.S. that puts the onus on governors for making decisions about their own state economies."
    },
    {
      date: "04/28/20",
      text: "More than 700,000 people in the United States have tested positive for coronavirus. The U.S. leads all countries in reported deaths with 36,734."
    },
    {date: "07/16/20", text: "Most Cases in a day"},
  ];

  const stateCodePairs = {
    "AL": "Alabama",
    "AK": "Alaska",
    "AS": "American Samoa",
    "AZ": "Arizona",
    "AR": "Arkansas",
    "CA": "California",
    "CO": "Colorado",
    "CT": "Connecticut",
    "DE": "Delaware",
    "DC": "District of Columbia",
    "FL": "Florida",
    "GA": "Georgia",
    "GU": "Guam",
    "HI": "Hawaii",
    "ID": "Idaho",
    "IL": "Illinois",
    "IN": "Indiana",
    "IA": "Iowa",
    "KS": "Kansas",
    "KY": "Kentucky",
    "LA": "Louisiana",
    "ME": "Maine",
    "MD": "Maryland",
    "MA": "Massachusetts",
    "MI": "Michigan",
    "MN": "Minnesota",
    "MO": "Missouri",
    "MP": "Northern Mariana Islands",
    "MS": "Mississippi",
    "MT": "Montana",
    "NE": "Nebraska",
    "NV": "Nevada",
    "NH": "New Hampshire",
    "NJ": "New Jersey",
    "NM": "New Mexico",
    "NY": "New York",
    "NC": "North Carolina",
    "ND": "North Dakota",
    "OH": "Ohio",
    "OK": "Oklahoma",
    "OR": "Oregon",
    "PA": "Pennsylvania",
    "PR": "Puerto Rico ",
    "RI": "Rhode Island",
    "SC": "South Carolina",
    "SD": "South Dakota",
    "TN": "Tennessee",
    "TX": "Texas",
    "UT": "Utah",
    "VI": "Virgin Islands",
    "VT": "Vermont",
    "VA": "Virginia",
    "WA": "Washington",
    "WV": "West Virginia",
    "WI": "Wisconsin",
    "WY": "Wyoming"
  }


  $scope.JSON_DATA = {};
  $scope.loading = true;
  $scope.countries = [];


  $scope.init = () => {
    var promises = [];

    _.each(_.keys(TIMESERIES), (series) => {
      let promise = d3.csv(TIMESERIES[series]);
      promise.then((val) => {
        $scope.JSON_DATA[series] = {data: _.map(_.omit(val, ['columns'])), columns: _.map(val.columns)};
      });
      promises.push(promise);
    });

    Promise.all(promises).then(function (values) {
      console.log($scope.JSON_DATA);
      $scope.loading = false;

      $scope.getOptions();
      $scope.optionsChange();
      $timeout(() => {
        $scope.$apply()
      });
    }).catch((err) => {
      console.log(err);
      $scope.loading = false;
    });

    $scope.view = 'overview';
    $scope.selectedRegion = "All US";
    $scope.selectedPeriod = "-1";
    $scope.selectedCountType = "daily";
    $scope.selectedInterval = "daily";

  }

  $scope.init();

  $scope.changeView = (view) => {
    $('.timeline-tooltip').html('')
    $scope.view = view;
    $scope.getOptions();
    $timeout(() => {
      $scope.optionsChange();
    }, 100)
  }

  $scope.getOptions = () => {
    if ($scope.view == 'cases') {
      let scopeData = $scope.JSON_DATA.confirmed_us;

      $scope.regions = _.chain(scopeData.data).map((a) => {
        return _.pick(a, ["Province_State", "Country_Region"])
      }).map('Province_State').uniq().sort().value()
      $scope.regions.unshift("All US");

      let date_columns = _.filter(scopeData.columns, (m) => {
        return !_.includes(["UID", "iso2", "iso3", "code3", "FIPS", "Admin2", "Province_State", "Country_Region", "Lat", "Long_", "Combined_Key"], m)
      })

      $scope.calculatedUSCasesAvailable = {};
      _.each($scope.regions, (region) => {
        $scope.calculatedUSCasesAvailable[region] = _.chain(scopeData.data)
          .filter({"Province_State": region})
          .map(a => _.omit(a, ["UID", "iso2", "iso3", "code3", "FIPS", "Admin2", "Province_State", "Country_Region", "Lat", "Long_", "Combined_Key"]))
          .value()
      });
      let AllUS = {}
      $scope.calculatedUSCasesAvailable = _.mapValues($scope.calculatedUSCasesAvailable, (regionList, key) => {
        var sums = {};
        _.each(date_columns, function (dateCol) {
          _.each(regionList, function (county) {
            sums[dateCol] = (+sums[dateCol] || 0) + +county[dateCol];
          });
          AllUS[dateCol] = (+AllUS[dateCol] || 0) + sums[dateCol]
        });
        return sums
      });
      $scope.calculatedUSCasesAvailable['All US'] = AllUS;

      $scope.dateRange = {
        start: moment.min(_.map(date_columns, d => moment(d, 'MM/DD/YY'))).toISOString(),
        end: moment().toISOString()
      };
      return;
    } else if ($scope.view == 'deaths') {
      let scopeData = $scope.JSON_DATA.deaths_us;
      $scope.regions = _.chain(scopeData.data).map((a) => {
        return _.pick(a, ["Province_State", "Country_Region"])
      }).map('Province_State').uniq().sort().value()
      $scope.regions.unshift("All US");

      let date_columns = _.filter(scopeData.columns, (m) => {
        return !_.includes(["UID", "iso2", "iso3", "code3", "FIPS", "Admin2", "Province_State", "Country_Region", "Lat", "Long_", "Combined_Key", "Population"], m)
      })

      $scope.calculatedUSCasesAvailable = {};
      _.each($scope.regions, (region) => {
        $scope.calculatedUSCasesAvailable[region] = _.chain(scopeData.data)
          .filter({"Province_State": region})
          .map(a => _.omit(a, ["UID", "iso2", "iso3", "code3", "FIPS", "Admin2", "Province_State", "Country_Region", "Lat", "Long_", "Combined_Key", "Population"]))
          .value()
      });
      let AllUS = {}
      $scope.calculatedUSCasesAvailable = _.mapValues($scope.calculatedUSCasesAvailable, (regionList, key) => {
        var sums = {};
        _.each(date_columns, function (dateCol) {
          _.each(regionList, function (county) {
            sums[dateCol] = (+sums[dateCol] || 0) + +county[dateCol];
          });
          AllUS[dateCol] = (+AllUS[dateCol] || 0) + sums[dateCol]
        });
        return sums
      });
      $scope.calculatedUSCasesAvailable['All US'] = AllUS;
      $scope.dateRange = {
        start: moment.min(_.map(date_columns, d => moment(d, 'MM/DD/YY'))).toISOString(),
        end: moment().toISOString()
      };
      return;
    } else if ($scope.view == 'overview') {
      $scope.selectedCountType = "daily";
      $scope.selectedInterval = "daily";

      let scopeData = $scope.JSON_DATA.tests_us_states;
      let scopeGroupedData = _.chain(scopeData.data).map((r) => {
        r['Province_State'] = stateCodePairs[r.state];
        return r;
      }).value();
      $scope.regions = _.chain(scopeGroupedData).map('Province_State').uniq().sort().value()
      $scope.regions.unshift("All US");

      let date_columns = _.chain(scopeGroupedData).map("date").uniq().sort().value()
      $scope.calculatedTestsAvailable = _.chain(scopeGroupedData).groupBy('Province_State').value();

      $scope.calculatedTestsAvailable['All US'] = _.flatten(_.values($scope.calculatedTestsAvailable));
      let latestDate = date_columns[date_columns.length - 1];
      $scope.overviewData = {
        "total": ((d) => {
          return _.sum(_.map(_.filter(d, {date: latestDate}), (a) => {
            return +a.total
          }))
        })($scope.calculatedTestsAvailable[$scope.selectedRegion]),
        "totalPositive": ((d) => {
          return _.sum(_.map(_.filter(d, {date: latestDate}), (a) => {
            return +a.positive
          }))
        })($scope.calculatedTestsAvailable[$scope.selectedRegion]),
        "totalDeaths": ((d) => {
          return _.sum(_.map(_.filter(d, {date: latestDate}), (a) => {
            return +a.deathConfirmed
          }))
        })($scope.calculatedTestsAvailable[$scope.selectedRegion]),
        "totalHospitalized": ((d) => {
          return _.sum(_.map(_.filter(d, {date: latestDate}), (a) => {
            return +a.total
          }))
        })($scope.calculatedTestsAvailable[$scope.selectedRegion]),
      }
      $scope.dateRange = {
        start: moment.min(_.map(date_columns, d => moment(d, 'MM/DD/YY'))).toISOString(),
        end: moment().toISOString()
      };
      return;
    }
  }

  $scope.selectRegion = (region) => {
    $scope.selectedRegion = region;
    $scope.optionsChange();
  }

  $scope.changeCountType = (type) => {
    $scope.selectedCountType = type;
    $scope.optionsChange();
  }
  $scope.changeInterval = (type) => {
    $scope.selectedInterval = type;
    $scope.optionsChange();
  }
  $scope.changePeriod = (type) => {
    $scope.selectedPeriod = type;
    $scope.optionsChange();
  }

  $scope.optionsChange = () => {
    // transform chart here;
    if ($scope.view == 'cases') {
      // construct input data for chart here.
      let data = $scope.calculatedUSCasesAvailable[$scope.selectedRegion];
      if ($scope.selectedCountType == 'daily') {
        let _data_ = {};
        let keys = _.chain(data).keys().sort((k) => {
          return moment(k).valueOf()
        }).value();
        _.each(keys, (k, i) => {
          if (i > 0) {
            _data_[k] = data[keys[i]] - data[keys[i - 1]]
          } else {
            _data_[k] = data[keys[i]];
          }
        });
        data = _data_;
      }

      if ($scope.selectedInterval == 'weekly') {
        let _data_ = {};
        let keys = _.chain(data).map((k, v) => {
          return {date: v, value: k}
        }).groupBy((a) => {
          return moment(a.date).week()
        }).value()
        _.each(keys, (k, i) => {
          _data_[k[0].date] = _.sum(_.map(k, 'value')) / k.length;
        });
        data = _data_;
      }

      if ($scope.selectedPeriod == '90') {
        let _data_ = {};
        let keys = _.chain(data).keys().sort((k) => {
          return moment(k).valueOf()
        }).filter((k) => {
          return moment(k).valueOf() > moment().subtract(90, 'd').valueOf()
        }).value();
        _.each(keys, (k, i) => {
          _data_[k] = data[keys[i]]
        });
        data = _data_;
      }
      var dataset = _.chain(_.keys(data)).map((v, k) => {
        return {date: v, value: data[v]}
      }).value();
      createBarChart('#casesChart', data, $scope.selectedCountType == 'daily', {
        tooltipTitle: "Cases",
        EventSeries: (() => {
          if ($scope.selectedRegion == "All US") {
            return [
              {date: "03/09/20", text: "Confirmed cases in the U.S. topped 500."},
              {
                date: "03/23/20",
                text: "New York Gov. Andrew Cuomo announced the state will begin three studies of potential coronavirus treatments."
              },
              {
                date: "04/28/20",
                text: "More than 1,000,000 people in the United States have tested positive for coronavirus."
              },
              {date: "07/16/20", text: "Most Cases in a day"}
            ]
          } else {
            let peak = _.sortBy(dataset, (d) => {
              return -d.value
            })[0];
            return [
              {date: peak.date, text: "Most Cases recorded."}
            ];

          }

        })()
      })
      return;
    } else if ($scope.view == 'deaths') {
      // construct input data for chart here.
      let data = $scope.calculatedUSCasesAvailable[$scope.selectedRegion];
      if ($scope.selectedCountType == 'daily') {
        let _data_ = {};
        let keys = _.chain(data).keys().sort((k) => {
          return moment(k).valueOf()
        }).value();
        _.each(keys, (k, i) => {
          if (i > 0) {
            _data_[k] = data[keys[i]] - data[keys[i - 1]]
          } else {
            _data_[k] = data[keys[i]];
          }
        });
        data = _data_;
      }

      if ($scope.selectedInterval == 'weekly') {
        let _data_ = {};
        let keys = _.chain(data).map((k, v) => {
          return {date: v, value: k}
        }).groupBy((a) => {
          return moment(a.date).week()
        }).value()
        _.each(keys, (k, i) => {
          _data_[k[0].date] = _.sum(_.map(k, 'value')) / k.length;
        });
        data = _data_;
      }

      if ($scope.selectedPeriod == '90') {
        let _data_ = {};
        let keys = _.chain(data).keys().sort((k) => {
          return moment(k).valueOf()
        }).filter((k) => {
          return moment(k).valueOf() > moment().subtract(90, 'd').valueOf()
        }).value();
        _.each(keys, (k, i) => {
          _data_[k] = data[keys[i]]
        });
        data = _data_;
      }
      var dataset = _.chain(_.keys(data)).map((v, k) => {
        return {date: v, value: data[v]}
      }).value();
      createBarChart('#deathsChart', data, $scope.selectedCountType == 'daily', {
        tooltipTitle: "Deaths",
        EventSeries: (() => {
          if ($scope.selectedRegion == "All US") {
            return [
              {date: "03/26/20", text: "Deaths in the U.S. passed 1,000."},
              {date: "03/28/20", text: "The U.S. death toll surpassed 2,000."},
              {date: "04/11/20", text: "Coronavirus deaths in the United States passed the 20,000 mark."},
              {date: "04/17/20", text: "Most Deaths in a day"},
              {date: "04/28/20", text: "The U.S. leads all countries in reported deaths with 36,734."}
            ]
          } else {
            let peak = _.sortBy(dataset, (d) => {
              return -d.value
            })[0]
            return [{date: peak.date, text: "Most Deaths recorded."}];
          }
        })()
      })
      return;
    } else if ($scope.view == 'overview') {
      // construct input data for chart here.
      let data = $scope.calculatedTestsAvailable[$scope.selectedRegion];

      let date_columns = _.chain(data).map("date").uniq().sort().value()

      $scope.overviewData = {
        "total": ((d) => {
          return _.sum(_.map(d, (a) => {
            return +a.totalTestResultsIncrease
          }))
        })(data),
        "totalPositive": ((d) => {
          return _.sum(_.map(d, (a) => {
            return +a.positiveIncrease
          }))
        })(data),
        "totalDeaths": ((d) => {
          return _.sum(_.map(d, (a) => {
            return +a.deathIncrease
          }))
        })(data),
        "totalHospitalized": ((d) => {
          return _.sum(_.map(d, (a) => {
            return +a.hospitalizedIncrease
          }))
        })(data),
      }

      data = _.chain(data)
        .map((a) => {
          return _.pick(a, ["date", "deathConfirmed", "hospitalizedCurrently", "inIcuCurrently", "onVentilatorCurrently", "totalTestResults", "positive"])
        })
        .groupBy('date')
        .value();


      let cols = ["death", "deathConfirmed", "hospitalizedCurrently", "inIcuCurrently", "onVentilatorCurrently", "totalTestResults", "positive"]
      if ($scope.selectedCountType == 'daily') {
        let _data_ = {};
        let keys = _.chain(data).keys().sort((k) => {
          return moment(k, 'YYYYMMDD').valueOf()
        }).value();
        _.each(keys, (k, i) => {
          _data_[k] = {
            "deathConfirmed": _.sumBy(data[k], function (o) {
              return +(o.deathConfirmed || o.death || 0);
            }),
            "hospitalizedCurrently": _.sumBy(data[k], function (o) {
              return +(o.hospitalizedCurrently || 0);
            }),
            "inIcuCurrently": _.sumBy(data[k], function (o) {
              return +(o.inIcuCurrently || o.onVentilatorCurrently || 0);
            }),
            "onVentilatorCurrently": _.sumBy(data[k], function (o) {
              return +(o.onVentilatorCurrently || 0);
            }),
            "totalTestResults": _.sumBy(data[k], function (o) {
              return +(o.totalTestResults || 0);
            }),
            "positive": _.sumBy(data[k], function (o) {
              return +(o.positive || 0);
            })
          }
        });
        data = _data_;
      }

      if ($scope.selectedInterval == 'weekly') {
        let _data_ = {};
        let keys = _.chain(data).map((k, v) => {
          return {date: v, value: k}
        }).groupBy((a) => {
          return moment(a.date).week()
        }).value()
        _.each(keys, (k, i) => {
          _data_[k[0].date] = _.sum(_.map(k, 'value')) / k.length;
        });
        data = _data_;
      }

      if ($scope.selectedPeriod == '90') {
        let _data_ = {};
        let keys = _.chain(data).keys().sort((k) => {
          return moment(k).valueOf()
        }).filter((k) => {
          return moment(k).valueOf() > moment().subtract(90, 'd').valueOf()
        }).value();
        _.each(keys, (k, i) => {
          _data_[k] = data[keys[i]]
        });
        data = _data_;
      }
      var dataset = _.chain(_.keys(data)).map((v, k) => {
        return {date: v, value: data[v]}
      }).value();
      createLineChart('#overviewChart', data, $scope.selectedCountType == 'daily', {
        tooltipTitle: "Cases",
        EventSeries: []
      })
      return;
    }
  }

  $scope.goBack = () => {
    switch ($scope.view) {
      case 'cases':
        $scope.changeView('overview')
        break
      case 'deaths':
        $scope.changeView('cases')
        break

    }

  };
  $scope.goNext = () => {
    switch ($scope.view) {
      case 'cases':
        $scope.changeView('deaths')
        break
      case 'overview':
        $scope.changeView('cases')
        break

    }

  };
});


// d3 bar chart with tooltip

let drawAnnotationLines = (svg, options) => {

  svg.selectAll('.annotation-line').remove();
  if (options.length > 0) {
    let bars = svg.selectAll('.bar').filter((d, i) => {

      if (_.includes(_.map(options, (d) => {
        return d3.timeFormat("%m/%d/%y")(d3.timeParse("%m/%d/%y")(d.date))
      }), d3.timeFormat("%m/%d/%y")(d.date).toString())) {
        d.annotation_data = _.find(options, (o) => {
          return d3.timeFormat("%m/%d/%y")(d.date).toString() == o.date
        })
        return true
      } else {
        return false
      }
    });

    bars._groups[0].forEach((opt) => {
      svg.append('g')
        .attr('class', 'annotation-line')
        .append("line")          // attach a line
        .style("stroke", "black")  // colour the line
        .attr("x1", 200)     // x position of the first end of the line
        .attr("y1", 40)      // y position of the first end of the line
        .attr("x2", (d) => {
          return opt.x.baseVal.value;
        })     // x position of the second end of the line
        .attr("y2", (d) => {
          return opt.y.baseVal.value;
        });    // y position of the second end of the line
    });
  }

}

let createBarChart = (container, data, showMax, options) => {

  var containerNode = d3.select(container);
  var node = containerNode.node();
  var containerNodeClientRect = node.getBoundingClientRect();
  var showingTooltip = false
  const tipShow = (d, toolTipContent) => {
    showingTooltip = true;
    tooltip
      .transition()
      .style("left", (d3.event.pageX) - 250 + "px")
      .style("top", (d3.event.pageY - 80) + "px")
      .duration(200)
      .style('opacity', 1)

    tooltipRect.attr('style', 'display:block')
    tooltipRect.select("div").remove();
    tooltipRect.append("div")
      .style("position", "absolute")
      // .style("visibility", "hidden")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "1px")
      .style("border-radius", "5px")
      .style("padding", "10px")
      .html(toolTipContent || "");

  }
  const tipHide = (d) => {
    tooltip
      .style('opacity', 0)
      .style("left", "-10000px");
    d3.event && d3.event.stopPropagation();
    showingTooltip = false;
    svg.selectAll('.annotation-line').remove();
  };
  const overviewTipHide = () => {
    drawAnnotationLines(svg, []);
    tipHide();
  }
  const overviewTipShow = _.debounce(() => {
    if (showingTooltip == true) {
      return
    }
    let d = {date: "", value: 1203}
    let content = `<div class="annotation-blk" style="width:100%;height:auto">
      <h5>${options.tooltipTitle} Overview</h5>`;
    options.EventSeries.forEach((evnt) => {
      content += `<div class="label-header">Date: <span class="label-val">${evnt.date}</span></div>`
      content += `<div class="label-val">${evnt.text}</div>`
    })

    content += `</div>`;

    tooltip
      .transition()
      .style("left", containerNodeClientRect.left + (100) + "px")
      .style("top", containerNodeClientRect.top + (100 - 28) + "px")
      .duration(200)
      .style('opacity', 1)

    tooltipRect.attr('style', 'display:block')
    tooltipRect.select("div").remove();
    tooltipRect.append("div")
      .style("position", "absolute")
      // .style("visibility", "hidden")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "1px")
      .style("border-radius", "5px")
      .style("padding", "10px")
      .html(options.EventSeries.length > 0 ? content || "" : "");

    drawAnnotationLines(svg, options.EventSeries);

  }, 2000)

  d3.select('.timeline-tooltip').html('')

  var margin = {top: 50, right: 80, bottom: 50, left: 80},
    width = containerNodeClientRect.width - margin.left - margin.right,
    height = containerNodeClientRect.height - margin.top - margin.bottom;

  var barColor = d3.interpolateLab("steelblue", "orange");
  var highlightColor = d3.interpolateInferno(0.6);

  containerNode.select("svg").remove();

  var svg = containerNode.append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .on('mouseenter', overviewTipHide)
    .on('mouseleave', overviewTipShow)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

  var tooltip = d3.select('body').select(".timeline-tooltip")
    .style('opacity', 0)

  var tooltipRect = tooltip.append('div');

  var dataset = _.chain(_.keys(data)).map((v, k) => {
    return {date: d3.timeParse("%m/%d/%Y")(v), value: data[v]}
  }).value();

  var y = d3.scaleLinear()
    .range([height, 0]);
  var yAxis = d3.axisLeft(y).ticks(10);
  y.domain([0, d3.max(dataset, d => {
    return d.value;
  })]);

  var x = d3.scaleBand()
    .range([0, width])
    .padding(0.4);
  var xAxis = d3.axisBottom(x).tickFormat((d, i) => {
    return dataset.length > 40 ? i % 3 !== 0 ? '' : d3.timeFormat("%d/%m")(d) : d3.timeFormat("%d/%m")(d);
  });
  x.domain(dataset.map(d => {
    return d.date;
  }));

  svg.append("g")
    .attr("class", "xAxis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)
    .selectAll("text")
    .style("text-anchor", "end")
    .style("fontsize", "11px")
    .attr("dx", "-.8em")
    .attr("dy", "-.55em")
    .attr("transform", "rotate(-90)");

  svg.append("g")
    .attr("class", "yAxis")
    .call(yAxis);

  let colorCode = (d) => {
    let max = d3.max(dataset, d => {
      return d.value;
    });
    return d.value === max
      ? showMax ? highlightColor : barColor(d.value / max) : barColor(d.value / max)
  };
  svg.selectAll(".bar")
    .data(dataset)
    .enter().append("rect")
    .attr("class", "bar")
    .on('mouseover', (d) => {
      let content = `<div class="tooltip-blk" style="width:200px;height:auto">
      <h5>${options.tooltipTitle}</h5>
      <div class="label-header">Date: <span class="label-val">${d3.timeFormat("%m/%d/%Y")(d.date)}</span></div>
      <div class="label-header">Total: <span class="label-val">${d.value.toLocaleString()}</span></div>
      </div>`;

      if (content) {
        tipShow(d, content)
      }
    })
    .on('mouseout', tipHide)
    .style("display", d => {
      return d.value === null ? "none" : null;
    })
    .style("fill", colorCode)
    .attr("x", d => {
      return x(d.date);
    })
    .attr("width", x.bandwidth())
    .attr("y", d => {
      return height;
    })
    .attr("height", 0)
    .transition()
    .duration(500)
    .attr("y", d => {
      return y(d.value);
    })
    .attr("height", d => {
      return d3.max([height - y(d.value), 1]);
    });

  // text label for the y axis
  svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left + 10)
    .attr("x", 0 - (height / 2))
    .attr("dy", "16px")
    .style("text-anchor", "middle")
    .text(`Number of ${options.tooltipTitle}`);


  overviewTipShow();
};

let createLineChart = (container, data, showMax, options) => {

  var containerNode = d3.select(container);
  var node = containerNode.node();
  var containerNodeClientRect = node.getBoundingClientRect();
  var showingTooltip = false
  const tipShow = (d, toolTipContent) => {
    showingTooltip = true;
    tooltip
      .transition()
      .style("left", (d3.event.pageX) - 250 + "px")
      .style("top", (d3.event.pageY - 80) + "px")
      .duration(200)
      .style('opacity', 1)

    tooltipRect.attr('style', 'display:block')
    tooltipRect.select("div").remove();
    tooltipRect.append("div")
      .style("position", "absolute")
      // .style("visibility", "hidden")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "1px")
      .style("border-radius", "5px")
      .style("padding", "10px")
      .html(toolTipContent || "");

  }

  d3.select('.timeline-tooltip').html('')

  var margin = {top: 50, right: 80, bottom: 50, left: 100},
    width = containerNodeClientRect.width - margin.left - margin.right,
    height = containerNodeClientRect.height - margin.top - margin.bottom;

  containerNode.select("svg").remove();

  var svg = containerNode.append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

  var tooltip = d3.select('body').select(".timeline-tooltip")
    .style('opacity', 0)

  var tooltipRect = tooltip.append('div');

  var dataset = _.chain(_.keys(data)).map((v, k) => {
    return {date: d3.timeParse("%Y%m%d")(v), value: data[v]}
  }).sort((d) => {
    return (new Date(d.date)).getTime()
  }).value();

  var y = d3.scaleLog()
    .base(10)
    .domain([1, d3.max(dataset, d => {
      return _.max(_.toArray(d.value));
    })])
    .range([height, 0]);
  var yAxis = d3.axisLeft(y).ticks(5).tickFormat(function (d) {
    return y.tickFormat(4, d3.format(",d"))(d)
  })

  var x = d3.scaleBand()
    .range([0, width])
    .padding(0.4);
  var xAxis = d3.axisBottom(x).tickFormat((d, i) => {
    return dataset.length > 40 ? i % 3 !== 0 ? '' : d3.timeFormat("%d/%m")(d) : d3.timeFormat("%d/%m")(d);
  });
  x.domain(dataset.map(d => {
    return d.date;
  }));

  svg.append("g")
    .attr("class", "xAxis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)
    .selectAll("text")
    .style("text-anchor", "end")
    .style("fontsize", "11px")
    .attr("dx", "-.8em")
    .attr("dy", "-.55em")
    .attr("transform", "rotate(-90)");

  svg.append("g")
    .attr("class", "yAxis")
    .call(yAxis);

  var deathConfirmedline = d3.line()
    .x(function (d) {
      return x(d.date);
    })
    .y(function (d) {
      return y(d.value.deathConfirmed || d.value.death || 1);
    });

  var hospitalizedCurrentlyline = d3.line()
    .x(function (d) {
      return x(d.date);
    })
    .y(function (d) {
      return y(d.value.hospitalizedCurrently || 1);
    });

  var inIcuCurrentlyline = d3.line()
    .x(function (d) {
      return x(d.date);
    })
    .y(function (d) {
      return y(d.value.inIcuCurrently || d.value.onVentilatorCurrently || 1);
    });

  var onVentilatorCurrentlyline = d3.line()
    .x(function (d) {
      return x(d.date);
    })
    .y(function (d) {
      return y(d.value.onVentilatorCurrently || 1);
    });

  var totalTestResultsline = d3.line()
    .x(function (d) {
      return x(d.date);
    })
    .y(function (d) {
      return y(d.value.totalTestResults || 1);
    });

  var positiveline = d3.line()
    .x(function (d) {
      return x(d.date);
    })
    .y(function (d) {
      return y(d.value.positive || 1);
    });


  svg.append("path")    // Add the valueline path.
    .attr("class", "line")
    .attr("d", deathConfirmedline(dataset));

  svg.append("path")    // Add the valueline2 path.
    .attr("class", "line")
    .style("stroke", "red")
    .attr("d", hospitalizedCurrentlyline(dataset));


  svg.append("path")    // Add the valueline2 path.
    .attr("class", "line")
    .style("stroke", "slategray")
    .attr("d", inIcuCurrentlyline(dataset));


  svg.append("path")    // Add the valueline2 path.
    .attr("class", "line")
    .style("stroke", "orange")
    .attr("d", onVentilatorCurrentlyline(dataset));


  svg.append("path")    // Add the valueline2 path.
    .attr("class", "line")
    .style("stroke", "olivedrab")
    .attr("d", totalTestResultsline(dataset));


  svg.append("path")    // Add the valueline2 path.
    .attr("class", "line")
    .style("stroke", "brown")
    .attr("d", positiveline(dataset));

  // text label for the y axis
  svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left + 10)
    .attr("x", 0 - (height / 2))
    .attr("dy", "16px")
    .style("text-anchor", "middle")
    .text(`Number of ${options.tooltipTitle}`);

  svg.append("text")
    .attr("transform", "translate(" + (width + 3) + "," + y(dataset[dataset.length - 1].value.deathConfirmed || 1) + ")")
    .attr("dy", "-.35em")
    .attr("text-anchor", "end")
    .style("fill", "red")
    .text("Confirmed Deaths");

  svg.append("text")
    .attr("transform", "translate(" + (width + 3) + "," + y(dataset[dataset.length - 1].value.hospitalizedCurrently || 1) + ")")
    .attr("dy", "1.35em")
    .attr("dx", "-10.35em")
    .attr("text-anchor", "end")
    .style("fill", "steelblue")
    .text("Currently Hostpitalized");


  svg.append("text")
    .attr("transform", "translate(" + (width + 3) + "," + y(dataset[dataset.length - 1].value.inIcuCurrently || 1) + ")")
    .attr("dy", "-1.35em")
    .attr("dx", "-1.35em")
    .attr("text-anchor", "end")
    .style("fill", "slategray")
    .text("Currently In ICU");


  svg.append("text")
    .attr("transform", "translate(" + (width + 3) + "," + y(dataset[dataset.length - 1].value.onVentilatorCurrently || 1) + ")")
    .attr("dy", "-.35em")
    .attr("dx", "-10.35em")
    .attr("text-anchor", "end")
    .style("fill", "orange")
    .text("Currently on Ventilator");


  svg.append("text")
    .attr("transform", "translate(" + (width + 3) + "," + y(dataset[dataset.length - 1].value.totalTestResults || 1) + ")")
    .attr("dy", "1.35em")
    .attr("dx", "-1.35em")
    .attr("text-anchor", "end")
    .style("fill", "olivedrab")
    .text("Total Test Results");


  svg.append("text")
    .attr("transform", "translate(" + (width + 3) + "," + y(dataset[dataset.length - 1].value.positive || 1) + ")")
    .attr("dy", "1.35em")
    .attr("dx", "-1.35em")
    .attr("text-anchor", "end")
    .style("fill", "brown")
    .text("Total Positive");

}
