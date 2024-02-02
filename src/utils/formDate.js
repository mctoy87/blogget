const formatDate = date => {
  // const d = date * 1000;
  const options = {
    weekday: 'short',
    year: 'numeric',
    mounth: 'numeric',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  };
  return new Intl.DateTimeFormat('ru', options)
    .format(new Date());
};

export default formatDate;
