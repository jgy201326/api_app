console.log(data);
const current = data.records.filter(
  (i) =>
    i.데이터기준일자.split('-')[0] >= '2023' &&
    i.데이터기준일자.split('-')[1] >= '12'
);
console.log(current);

current.forEach((item) => {
  console.log(item.데이터기준일자);
});
