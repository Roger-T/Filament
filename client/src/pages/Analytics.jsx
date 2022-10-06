import React from 'react';
import axios from 'axios';
import CreateTable from '../components/CreateTable';

class Analytics extends React.Component {
    constructor() {
        super();
        this.state = {
            analyticsData: undefined,
            page: 1,
            pageSize: 100
        }
    }

    componentDidMount = async () => {
        const post = await axios.get('http://localhost:5000/api/analytics', {page:this.state.page, pageSize:this.state.pageSize})
        
        this.setState(() => ({
            analyticsData: post.data
        }))             
    }    

    componentWillUnmount = () => {
        this.setState(()=> ({
            analyticsData: undefined,
            page: 1,
            pageSize: 10
        }))
    }

    render() {
        const dataReturned = this.state.analyticsData;
        return (
            dataReturned != undefined && <CreateTable analyticsStats={this.state.analyticsData}/>
        )
    }
  }

export default Analytics;
