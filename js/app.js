$(function () {
  // Handler for .ready() called.

  const TIMESERIES = {
    confirmed_us: 'https://github.com/CSSEGISandData/COVID-19/raw/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_US.csv',
    confirmed_global: 'https://github.com/CSSEGISandData/COVID-19/raw/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv',
    deaths_us: 'https://github.com/CSSEGISandData/COVID-19/raw/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_US.csv',
    deaths_global: 'https://github.com/CSSEGISandData/COVID-19/raw/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv',
    recovered_global: 'https://github.com/CSSEGISandData/COVID-19/raw/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv',
    tests_us: 'https://covidtracking.com/api/v1/us/daily.csv',
    tests_us_states: 'https://covidtracking.com/api/v1/states/daily.csv',
  }

  // let JSON_TIMESERIES = {};
  //
  // JSON_TIMESERIES['confirmed_us'] = await d3.csv(TIMESERIES['confirmed_us']);
  // JSON_TIMESERIES['confirmed_globalconfirmed_global'] = await d3.csv(TIMESERIES['confirmed_global']);
  // JSON_TIMESERIES['deaths_us'] = await d3.csv(TIMESERIES['deaths_us']);
  // JSON_TIMESERIES['deaths_global'] = await d3.csv(TIMESERIES['deaths_global']);
  // JSON_TIMESERIES['recovered_global'] = await d3.csv(TIMESERIES['recovered_global']);
  // JSON_TIMESERIES['tests_us'] = await d3.csv(TIMESERIES['tests_us']);
  // JSON_TIMESERIES['tests_us_states'] = await d3.csv(TIMESERIES['recovered_global']);
  var promises = [];

  _.each(_.keys(TIMESERIES), (series) => {
    let promise = d3.csv(TIMESERIES[series]);
    promise.series_name = series;
    promises.push(promise)
  });

  Promise.all(promises).then(function (values) {
    _.each(values, (val) => {
      console.log(val)
    });
  });

});
