import React, { useState } from 'react';
import "antd/dist/antd.css";
import { Table, Input, Col, Row } from "antd";
import SortedEventInfo from './SortedEventInfo';
import rawData from "./data";
import Gallery from './Gallery';

const classes = require('./EventInfo.module.css');


const baseColumns = [
    {
        title: "Користувач",
        dataIndex: "Name",
        key: "user"
    },
    {
        title: "Email",
        dataIndex: "Email",
        key: "email"
    },
    {
        title: "Поточний статус",
        dataIndex: "Enable",
        key: "status"
    }
];


const EventInfo = () => {

    const [filterTable, setFilterTable] = useState([{}]);
    const [baseData, ] = useState(rawData);

    const search = (value: any) => {
        const filteredTable = baseData.filter((item: any) =>
            Object.keys(item).some(k =>
                String(item[k])
                    .toLowerCase()
                    .includes(value.toLowerCase())
            )
        );
        setFilterTable(filteredTable);
    }

    return (
        <div className={classes.background}>
            <div className={classes.wrapper}>

                <div className={classes.actionsWrapper}>
                    <SortedEventInfo />
                </div>
                <Gallery />
                <div>
                    <Row>
                        <Col span={8} push={16}>
                            <Input.Search
                                style={{ width: "400px", margin: "0 0 10px 0" }}
                                placeholder="Search by..."
                                enterButton
                                onSearch={search}
                            />
                        </Col>
                    </Row>
                    <Table
                        rowKey="uid"
                        columns={baseColumns}
                        dataSource={filterTable.length < 2 ? baseData : filterTable}
                    />
                </div>

            </div>
        </div>
    )
}
export default EventInfo;