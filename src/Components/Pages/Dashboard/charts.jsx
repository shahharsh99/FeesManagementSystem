import React, { Component } from 'react'
import {CChart} from '@coreui/react-chartjs'
import { fetchTotalFees } from "../../../Actions/Dashboard/TotalFeesAction"
import { fetchTotalFeesStandardWise } from "../../../Actions/Dashboard/FeesStandardWiseAction"
import { fetchStandardList } from "../../../Actions/Standard/StandardListAction"
import { connect } from "react-redux";


const polar = {
  datasets: [
    {
      data: [
        11,
        16,
        7,
        3,
        14,
      ],
      label: 'My dataset' // for legend
    }],
  labels: [
    'Red',
    'Green',
    'Yellow',
    'Grey',
    'Blue',
  ],
};

const options = {
  // tooltips: {
    //   enabled: false,
    //   custom: customTooltips
    // },
    maintainAspectRatio: false
  }
  
  
class Charts extends Component{
  constructor(props){
    super(props);

    this.state = {
      standard : []
    }
  }
  
  
  getStandard = () => {
    this.props.standardListData.map(data => {
      let standard = [...this.state.standard]
      standard.push(data.standard)
      this.setState({standard})
      })
  }

        componentDidMount(){
              this.props.fetchStandardList().then(() => {
              const { standardListData, standardListError } = this.props;
            })

            this.props.fetchTotalFees().then(() => {
              const { totalFeesData } = this.props;
            })

            this.getStandard();
            // this.standard()
        }
  render(){   
    const data = [this.props.totalFeesPaid, this.props.totalFeesNotPaid]
        console.log("dataaaaa", data);
      const doughnut = {
  labels: [
    'Total Fees Paid',
    'Total Fees Not Paid'
    
  ],
  datasets: [
    {
      data: data,
      backgroundColor: [
        '#4db497',
        '#de4231'
      
      ],
      hoverBackgroundColor: [
        '#4db497',
        '#de4231'
      
      ],
    }],
  };
      console.log("lllllllllllllll",this.props.standardListData);
    return (
      <center>
      <div>
        <br/>
        <div className="col-md-6">
            <h4>Total Student's Fees</h4>
          <div className="chart-wrapper">
            <CChart type="doughnut" datasets={doughnut.datasets} labels={doughnut.labels}/>
          </div>
      </div>
      </div>
      </center>

    )
  }
}

const mapStateToProps = (state) => {
return {
    totalFeesLoading: state.totalFees?.isLoading,
    totalFeesData: state.totalFees?.data?.data || [],
    totalFeesError: state.totalFees?.error || {},

    feesStandardWiseLoading: state.feesStandardWise?.isLoading,
    feesStandardWiseData: state.feesStandardWise?.data?.data || [],
    feesStandardWiseError: state.feesStandardWise?.error || {},

    standardListLoading: state.standardList.isLoading,
    standardListData: state.standardList.data?.data || [],
    standardListError: state.standardList.error || {},

};
};

const mapDispatchToProps = {
    fetchTotalFees,
    fetchTotalFeesStandardWise,
    fetchStandardList,

};

export default connect(mapStateToProps, mapDispatchToProps)(Charts);