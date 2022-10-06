import React, {Fragment} from 'react';

const CreateTable = (props) => {
    const { analyticsStats } = props;

    console.log(analyticsStats)

    const tableRows = () => {
        const tableData = analyticsStats.items.map((message, index) => {
            return (
                <tr key={index}>
                    <td>{message.message}</td>
                    <td>{message.intent}</td>
                    <td>{message.replies.length}</td>
                    <td>{message.created_at}</td>
                </tr>
                
            )
        })    
        return tableData;
    }

    return (
        <table className="analyticsTable">
            <thead>
                <tr>
                    <td>First Message</td>
                    <td>Intent of message</td>
                    <td>Number of replies</td>
                    <td>Date/time message created</td>
                </tr>
            </thead>
            <tbody>
                {tableRows()}
            </tbody>
        </table>  
    )
}

export default CreateTable;