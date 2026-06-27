function DashboardCards() {

  const jobs = JSON.parse(localStorage.getItem("jobs")) || [];

  const stats = {
    total: jobs.length,
    interview: jobs.filter(job => job.status === "Interview").length,
    offer: jobs.filter(job => job.status === "Offer").length,
    rejected: jobs.filter(job => job.status === "Rejected").length,
  };

  const cards = [
    {
      title: "Applications",
      value: stats.total,
      color: "#2563eb",
    },
    {
      title: "Interviews",
      value: stats.interview,
      color: "#22c55e",
    },
    {
      title: "Offers",
      value: stats.offer,
      color: "#f59e0b",
    },
    {
      title: "Rejected",
      value: stats.rejected,
      color: "#ef4444",
    },
  ];

  return (
    <div className="cards">
      {cards.map((card) => (
        <div
          key={card.title}
          className="card"
          style={{ borderTop: `6px solid ${card.color}` }}
        >
          <h3>{card.title}</h3>
          <h1>{card.value}</h1>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;