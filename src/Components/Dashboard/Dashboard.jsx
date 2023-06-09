import {
  CRow,
  CCol,
  CWidgetStatsA,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";

import { CChartLine, CChartBar } from "@coreui/react-chartjs";
import "@coreui/coreui/dist/css/coreui.min.css";
export default function Dashboard() {
  return (
    <>
      <CRow>
        <CCol sm={6}>
          <CWidgetStatsA
            className="mb-4"
            color="danger"
            value={
              <>
                $9.000 <span className="fs-6 fw-normal">(40.9% )</span>
              </>
            }
            title="Widget title"
            chart={
              <CChartBar
                className="mt-3 mx-3"
                style={{ height: "70px" }}
                data={{
                  labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                    "January",
                    "February",
                    "March",
                    "April",
                  ],
                  datasets: [
                    {
                      label: "My First dataset",
                      backgroundColor: "rgba(255,255,255,.2)",
                      borderColor: "rgba(255,255,255,.55)",
                      data: [
                        78,
                        81,
                        80,
                        45,
                        34,
                        12,
                        40,
                        85,
                        65,
                        23,
                        12,
                        98,
                        34,
                        84,
                        67,
                        82,
                      ],
                      barPercentage: 0.6,
                    },
                  ],
                }}
                options={{
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  scales: {
                    x: {
                      grid: {
                        display: false,
                        drawTicks: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                    y: {
                      grid: {
                        display: false,
                        drawBorder: false,
                        drawTicks: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                  },
                }}
              />
            }
          />
        </CCol>
      </CRow>
    </>
  );
}
