import { LeftIconAccordionExample } from "../../BaseUi/UiAccordion&Collapse/UiAccordion&CollapseCode";
import {
  Button,
} from "reactstrap";

import ship1 from "../../../assets/images/ship1.png"

const columnsData = [
    {
        Header: "ID",
        accessor: "id",
        filterable: false,
    },
    {
        Header: "Name",
        accessor: "name",
        filterable: false,
    },
    {
        Header: "Date",
        accessor: "date",
        filterable: false,
    },
    {
        Header: "Visitor",
        accessor: "visitor",
        filterable: false,
    },
    {
        Header: "V.Date",
        accessor: "vdate",
        filterable: false,
    },
    {
        Header: "",
        accessor: "action",
        filterable: false,
        Cell: (purchase) => (<>
            <div className="edit">
                <Button className="btn btn-soft-primary btn-sm edit-item-btn shadow-none"
                    data-bs-toggle="modal" data-bs-target="#showModal"><span><span className='pt-1'>{purchase.row.original.action}</span></span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-right "><g><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></g></svg></Button>
            </div>
        </>)
    },
]
const dataList = [
    {
        id: "1",
        name: "electric",
        date: "Level 1",
        visitor: "electric component principle and use",
        vdate: "2022.2.23",
        action: "more",
    },
    {
        id: "2",
        name: "electric",
        date: "Level 1",
        visitor: "electric component principle and use",
        vdate: "2022.2.23",
        action: "more",
    },
    {
        id: "3",
        name: "electric",
        date: "Level 1",
        visitor: "electric component principle and use",
        vdate: "2022.2.23",
        action: "more",
    },
    {
        id: "4",
        name: "electric",
        date: "Level 1",
        visitor: "electric component principle and use",
        vdate: "2022.2.23",
        action: "more",
    },
    {
        id: "5",
        name: "electric",
        date: "Level 1",
        visitor: "electric component principle and use",
        vdate: "2022.2.23",
        action: "more",
    },
    {
        id: "6",
        name: "electric",
        date: "Level 1",
        visitor: "electric component principle and use",
        vdate: "2022.2.23",
        action: "more",
    },
    {
        id: "7",
        name: "electric",
        date: "Level 1",
        visitor: "electric component principle and use",
        vdate: "2022.2.23",
        action: "more",
    },
    {
        id: "8",
        name: "electric",
        date: "Level 1",
        visitor: "electric component principle and use",
        vdate: "2022.2.23",
        action: "more",
    },
    {
        id: "9",
        name: "electric",
        date : "Level 1",
        visitor: "electric component principle and use",
        vdate: "2022.2.23",
        action: "more",
    },
];

//about ship
const columnsShipData = [
    {
        Header: "ID",
        accessor: "id",
        filterable: false,
        Cell: (purchase) => (<>
            <p>{purchase.row.original.id}</p>
        </>)
    },
    {
        Header: "Photo",
        accessor: "photo",
        filterable: false,
        Cell: (purchase) => (<p className="img-item">
            <img src={purchase.row.original.photo} alt=" " width="100px"/>
        </p>)
    },
    {
        Header: "Date",
        accessor: "date",
        filterable: false,
        Cell: (purchase) => (<>
            <p>{purchase.row.original.date}</p>
        </>)
    },
    {
        Header: "Port",
        accessor: "portname",
        filterable: false,
        Cell: (purchase) => (<>
            <p>{purchase.row.original.portname}</p>
        </>)
    },
    {
        Header: "limit",
        accessor: "loadlimit",
        filterable: false,
        Cell: (purchase) => (<>
            <p>{purchase.row.original.loadlimit}</p>
        </>)
    },
    {
        Header: "Type",
        accessor: "shiptype",
        filterable: false,
        Cell: (purchase) => (<>
            <p>{purchase.row.original.shiptype}</p>
        </>)
    },
    {
        Header: "Visit",
        accessor: "visitedtime",
        filterable: false,
        Cell: (purchase) => (<>
            <p>{purchase.row.original.visitedtime}</p>
        </>)
    },
    {
        Header: "",
        accessor: "action",
        filterable: false,
        Cell: (purchase) => (<>
        <div className="d-flex gap-4 pt-4">
            <div className="edit">
                <Button className="btn btn-soft-primary btn-sm edit-item-btn shadow-none"
                    data-bs-toggle="modal" data-bs-target="#showModal"><span><span className='pt-1'>{purchase.row.original.action}</span></span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-right "><g><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></g></svg></Button>
            </div>
        </div>

        </>)
    },
]
const ShipDataList = [
    {
        id: "1",
        photo: ship1,
        date: "2022.1.3",
        score: "1000",
        portname: "none",
        loadlimit: "100t",
        shiptype: "ship",
        visitedtime: "3",
        action: "Detail"
    },
    {
        id: "2",
        photo: ship1,
        date: "2022.1.3",
        score: "1000",
        portname: "none",
        loadlimit: "100t",
        shiptype: "ship",
        visitedtime: "3",
        action: "Detail"
    },
    {
        id: "3",
        photo: ship1,
        date: "2022.1.3",
        score: "1000",
        portname: "none",
        loadlimit: "100t",
        shiptype: "ship",
        visitedtime: "3",
        action: "Detail"
    },
    {
        id: "4",
        photo: ship1,
        date: "2022.1.3",
        score: "1000",
        portname: "none",
        loadlimit: "100t",
        shiptype: "ship",
        visitedtime: "3",
        action: "Detail"
    },
    {
        id: "5",
        photo: ship1,
        date: "2022.1.3",
        score: "1000",
        portname: "none",
        loadlimit: "100t",
        shiptype: "ship",
        visitedtime: "3",
        action: "Detail"
    },
    {
        id: "6",
        photo: ship1,
        date: "2022.1.3",
        score: "1000",
        portname: "none",
        loadlimit: "100t",
        shiptype: "ship",
        visitedtime: "3",
        action: "Detail"
    },
    {
        id: "7",
        photo: ship1,
        date: "2022.1.3",
        score: "1000",
        portname: "none",
        loadlimit: "100t",
        shiptype: "ship",
        visitedtime: "3",
        action: "Detail"
    },
    {
        id: "8",
        photo: ship1,
        date: "2022.1.3",
        score: "1000",
        portname: "none",
        loadlimit: "100t",
        shiptype: "ship",
        visitedtime: "3",
        action: "Detail"
    },
]

//load data
const columnsLoadData = [
    {
        Header: "ID",
        accessor: "id",
        filterable: false,
        Cell: (purchase) => (<>
            <p>{purchase.row.original.id}</p>
        </>)
    },
    {
        Header: "Name",
        accessor: "name",
        filterable: false,
        Cell: (purchase) => (<>
            <p>{purchase.row.original.name}</p>
        </>)
    },
    {
        Header: "Amount",
        accessor: "amount",
        filterable: false,
        Cell: (purchase) => (<>
            <p>{purchase.row.original.amount}</p>
        </>)
    },
    {
        Header: "U-Port",
        accessor: "upport",
        filterable: false,
        Cell: (purchase) => (<>
            <p>{purchase.row.original.upport}</p>
        </>)
    },
    {
        Header: "D-Port",
        accessor: "downport",
        filterable: false,
        Cell: (purchase) => (<>
            <p>{purchase.row.original.downport}</p>
        </>)
    },
    {
        Header: "Date",
        accessor: "date",
        filterable: false,
        Cell: (purchase) => (<>
            <p>{purchase.row.original.date}</p>
        </>)
    },
    {
        Header: "Padkage",
        accessor: "package",
        filterable: false,
        Cell: (purchase) => (<>
            <p>{purchase.row.original.package}</p>
        </>)
    },
    {
        Header: "Visit",
        accessor: "visitedtime",
        filterable: false,
        Cell: (purchase) => (<>
            <p>{purchase.row.original.visitedtime}</p>
        </>)
    },
    {
        Header: "",
        accessor: "action",
        filterable: false,
        Cell: (purchase) => (<>
        <div className="d-flex gap-4 pt-4">
            <div className="edit">
                <Button className="btn btn-soft-primary btn-sm edit-item-btn shadow-none"
                    data-bs-toggle="modal" data-bs-target="#showModal"><span><span className='pt-1'>{purchase.row.original.action}</span></span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-right "><g><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></g></svg></Button>
            </div>
        </div>

        </>)
    },
]
const LoadDataList = [
    {
        id: "1",
        name: "material",
        amount: "20",
        upport: "1000",
        downport: "none",
        date: "100t",
        package: "ship",
        visitedtime: "3",
        action: "Detail"
    },
    {
        id: "2",
        name: "material",
        amount: "20",
        upport: "1000",
        downport: "none",
        date: "100t",
        package: "ship",
        visitedtime: "3",
        action: "Detail"
    },
    {
        id: "3",
        name: "material",
        amount: "20",
        upport: "1000",
        downport: "none",
        date: "100t",
        package: "ship",
        visitedtime: "3",
        action: "Detail"
    },
    {
        id: "4",
        name: "material",
        amount: "20",
        upport: "1000",
        downport: "none",
        date: "100t",
        package: "ship",
        visitedtime: "3",
        action: "Detail"
    },
    {
        id: "5",
        name: "material",
        amount: "20",
        upport: "1000",
        downport: "none",
        date: "100t",
        package: "ship",
        visitedtime: "3",
        action: "Detail"
    },
    {
        id: "6",
        name: "material",
        amount: "20",
        upport: "1000",
        downport: "none",
        date: "100t",
        package: "ship",
        visitedtime: "3",
        action: "Detail"
    },
    {
        id: "7",
        name: "material",
        amount: "20",
        upport: "1000",
        downport: "none",
        date: "100t",
        package: "ship",
        visitedtime: "3",
        action: "Detail"
    },
    {
        id: "8",
        name: "material",
        amount: "20",
        upport: "1000",
        downport: "none",
        date: "100t",
        package: "ship",
        visitedtime: "3",
        action: "Detail"
    },
    {
        id: "9",
        name: "material",
        amount: "20",
        upport: "1000",
        downport: "none",
        date: "100t",
        package: "ship",
        visitedtime: "3",
        action: "Detail"
    },
]

const columnsProductData = [
    {
        Header: "ID",
        accessor: "id",
        filterable: false,
        Cell: (purchase) => (<>
            <p>{purchase.row.original.id}</p>
        </>)
    },
    {
        Header: "Name",
        accessor: "name",
        filterable: false,
        Cell: (purchase) => (<>
            <p>{purchase.row.original.name}</p>
        </>)
    },
    {
        Header: "Photo",
        accessor: "photo",
        filterable: false,
        Cell: (purchase) => (<p className="img-item">
            <img src={purchase.row.original.photo} alt=" " width="100px"/>
        </p>)
    },
    {
        Header: "A/Unit",
        accessor: "aunit",
        filterable: false,
        Cell: (purchase) => (<>
            <p>{purchase.row.original.aunit}</p>
        </>)
    },
    {
        Header: "Hope",
        accessor: "hope",
        filterable: false,
        Cell: (purchase) => (<>
            <p>{purchase.row.original.hope}</p>
        </>)
    },
    {
        Header: "allow",
        accessor: "allow",
        filterable: false,
        Cell: (purchase) => (<>
            <p>{purchase.row.original.allow}</p>
        </>)
    },
    {
        Header: "Visit",
        accessor: "visitedtime",
        filterable: false,
        Cell: (purchase) => (<>
            <p>{purchase.row.original.visitedtime}</p>
        </>)
    },
    {
        Header: "",
        accessor: "action",
        filterable: false,
        Cell: (purchase) => (<>
        <div className="d-flex gap-4 pt-4">
            <div className="edit">
                <Button className="btn btn-soft-primary btn-sm edit-item-btn shadow-none"
                    data-bs-toggle="modal" data-bs-target="#showModal"><span><span className='pt-1'>{purchase.row.original.action}</span></span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-right "><g><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></g></svg></Button>
            </div>
        </div>

        </>)
    },
]
const ProductDataList = [
    {
        id: "1",
        photo: ship1,
        name: "none",
        aunit: "100/t",
        hope: "10, 000 $",
        allow: "D-4585514",
        action: "detail"
    },
    {
        id: "2",
        photo: ship1,
        name: "none",
        aunit: "100/t",
        hope: "10, 000 $",
        allow: "D-4585514",
        action: "detail"
    },
    {
        id: "3",
        photo: ship1,
        name: "none",
        aunit: "100/t",
        hope: "10, 000 $",
        allow: "D-4585514",
        action: "detail"
    },
    {
        id: "4",
        photo: ship1,
        name: "none",
        aunit: "100/t",
        hope: "10, 000 $",
        allow: "D-4585514",
        action: "detail"
    },
    {
        id: "5",
        photo: ship1,
        name: "none",
        aunit: "100/t",
        hope: "10, 000 $",
        allow: "D-4585514",
        action: "detail"
    },
    {
        id: "6",
        photo: ship1,
        name: "none",
        aunit: "100/t",
        hope: "10, 000 $",
        allow: "D-4585514",
        action: "detail"
    },
    {
        id: "7",
        photo: ship1,
        name: "none",
        aunit: "100/t",
        hope: "10, 000 $",
        allow: "D-4585514",
        action: "detail"
    },
    {
        id: "8",
        photo: ship1,
        name: "none",
        aunit: "100/t",
        hope: "10, 000 $",
        allow: "D-4585514",
        action: "detail"
    },
]
const columnsGoodsData = [
    {
        Header: "ID",
        accessor: "id",
        filterable: false,
        Cell: (purchase) => (<>
            <p>{purchase.row.original.id}</p>
        </>)
    },
    {
        Header: "Name",
        accessor: "name",
        filterable: false,
        Cell: (purchase) => (<>
            <p>{purchase.row.original.name}</p>
        </>)
    },
    {
        Header: "Photo",
        accessor: "photo",
        filterable: false,
        Cell: (purchase) => (<p className="img-item">
            <img src={purchase.row.original.photo} alt=" " width="100px"/>
        </p>)
    },
    {
        Header: "A/Unit",
        accessor: "aunit",
        filterable: false,
        Cell: (purchase) => (<>
            <p>{purchase.row.original.aunit}</p>
        </>)
    },
    {
        Header: "Hope",
        accessor: "hope",
        filterable: false,
        Cell: (purchase) => (<>
            <p>{purchase.row.original.hope}</p>
        </>)
    },
    {
        Header: "allow",
        accessor: "allow",
        filterable: false,
        Cell: (purchase) => (<>
            <p>{purchase.row.original.allow}</p>
        </>)
    },
    {
        Header: "Visit",
        accessor: "visitedtime",
        filterable: false,
        Cell: (purchase) => (<>
            <p>{purchase.row.original.visitedtime}</p>
        </>)
    },
    {
        Header: "",
        accessor: "action",
        filterable: false,
        Cell: (purchase) => (<>
        <div className="d-flex gap-4 pt-4">
            <div className="edit">
                <Button className="btn btn-soft-primary btn-sm edit-item-btn shadow-none"
                    data-bs-toggle="modal" data-bs-target="#showModal"><span><span className='pt-1'>{purchase.row.original.action}</span></span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-right "><g><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></g></svg></Button>
            </div>
        </div>

        </>)
    },
]
const GoodsDataList = [
    {
        id: "1",
        photo: ship1,
        name: "none",
        aunit: "100/t",
        hope: "10, 000 $",
        allow: "D-4585514",
        action: "detail"
    },
    {
        id: "2",
        photo: ship1,
        name: "none",
        aunit: "100/t",
        hope: "10, 000 $",
        allow: "D-4585514",
        action: "detail"
    },
    {
        id: "3",
        photo: ship1,
        name: "none",
        aunit: "100/t",
        hope: "10, 000 $",
        allow: "D-4585514",
        action: "detail"
    },
    {
        id: "4",
        photo: ship1,
        name: "none",
        aunit: "100/t",
        hope: "10, 000 $",
        allow: "D-4585514",
        action: "detail"
    },
    {
        id: "5",
        photo: ship1,
        name: "none",
        aunit: "100/t",
        hope: "10, 000 $",
        allow: "D-4585514",
        action: "detail"
    },
    {
        id: "6",
        photo: ship1,
        name: "none",
        aunit: "100/t",
        hope: "10, 000 $",
        allow: "D-4585514",
        action: "detail"
    },
    {
        id: "7",
        photo: ship1,
        name: "none",
        aunit: "100/t",
        hope: "10, 000 $",
        allow: "D-4585514",
        action: "detail"
    },
    {
        id: "8",
        photo: ship1,
        name: "none",
        aunit: "100/t",
        hope: "10, 000 $",
        allow: "D-4585514",
        action: "detail"
    },
]
export { columnsData, dataList, columnsShipData, ShipDataList, columnsLoadData, LoadDataList, columnsProductData, ProductDataList, columnsGoodsData, GoodsDataList}