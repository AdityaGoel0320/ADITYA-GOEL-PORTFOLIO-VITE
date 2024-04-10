

const TimelineItem = ({ title, date, description }) => {
  return (
    <li className="timeline-item">
      <h2 className="h2 timeline-item-title">{title}</h2>
      <span>{date}</span>
      <p className="timeline-text">{description}</p>
    </li>
  );
}

export default TimelineItem;