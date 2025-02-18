import { FaCreditCard, FaLayerGroup } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import LineCharts from "../../../../components/graphicChart/lineCharts";
import PieCharts from "../../../../components/graphicChart/pieChart";
const cardMonitor = [
  {
    id: 1,
    title: "Today Orders",
    value: "Rp 1.000.000",
    icon: <FaLayerGroup />,
  },
  { id: 2, title: "This Month", value: "Rp 5.000.000", icon: <FaCreditCard /> },
  { id: 3, title: "Last Month", value: "1.000", icon: <FaCartShopping /> },
  { id: 4, title: "All Times Order", value: "10", icon: <FaLayerGroup /> },
];

const DashboardAdmin = () => {
  return (
    <>
      <section id="CardMonitor">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cardMonitor.map((card) => (
            <div
              key={card.id}
              className="bg-white/10 backdrop-blur-md text-white px-6 py-5 flex flex-col gap-2 items-center rounded-xl shadow-md hover:[box-shadow:0_0_6px_2px_#fff] duration-300 ease-in"
            >
              <span className="text-4xl text-white">{card.icon}</span>
              <div className="text-center">
                <h2 className="text-lg font-semibold">{card.title}</h2>
                <p className="text-xl">{card.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section
        id="Chart"
        className="grid grid-row sm:grid-cols-2 justify-center mt-8 gap-4"
      >
        <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md hover:[box-shadow:0_0_6px_2px_#fff] duration-300 ease-in">
          <LineCharts />
        </div>
        <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md hover:[box-shadow:0_0_6px_2px_#fff] duration-300 ease-in">
          <PieCharts />
        </div>
      </section>
    </>
  );
};

export default DashboardAdmin;
