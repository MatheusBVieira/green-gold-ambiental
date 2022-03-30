import { transparentize } from 'polished';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';

const options: Chart.ChartOptions = {
  maintainAspectRatio: false,
  elements: {
    line: {
      tension: 0
    }
  },
  legend: {
    display: false,
    position: 'bottom',
    align: 'center',
    labels: {
      usePointStyle: true,
      fontColor: '#fff',
      fontSize: 12,
    }
  },
  scales: {
    xAxes: [
      {
        display: true,
        gridLines: {
          display: false
        },
        ticks: {
          beginAtZero: true,
          fontColor: '#fff',
          fontSize: 12,
        }
      }
    ],
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'retention',
        gridLines: {
          display: false,
        },
        ticks: {
          beginAtZero: true,
          fontColor: '#fff',
          fontSize: 14,
          padding: 20,
          min: 1000,
          max: 2500,
          maxTicksLimit: 4,
          callback: function (value, index, ticks) {
            return value + '%';
          }
        }
      }
    ],
  },
};

export interface ChartProps {
  data: Chart.ChartData
  title: string
}

export default function Chart ({ data, title }: ChartProps) {
  return <ChartWrapper >
    <div style={{ marginBottom: 18, marginTop: 52 }}>
      <Heading>
        {title}
      </Heading>
    </div>
    {
      <Bar
        type="bar"
        data={data}
        options={options}
      />
    }
  </ChartWrapper>
}

const ChartWrapper = styled.div`
  text-align: center;

  width: 418px;
  height: 352px;
  
  @media only screen and (max-width: 500px) {
    width: 311px;
    height: 301px;
  }
`

const Heading = styled.h3`
  font-weight: 600;
  font-size: 24px;

  color:${p => p.theme.attentionForeground};
  
  @media only screen and (max-width: 500px) {
    font-size: 14px;
    line-height: 17px;
  }
`