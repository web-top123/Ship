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
                <Button href = {"/ship-details/" + purchase.row.original.id} className="btn btn-soft-primary btn-sm edit-item-btn shadow-none"
                    data-bs-toggle="modal" data-bs-target="#showModal"><span><span className='pt-1'>more</span></span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-right "><g><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></g></svg></Button>
            </div>
        </>)
    },
]
const datasList = [
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
        accessor: "file_url",
        filterable: false,
        Cell: (purchase) => (<p className="img-item">
            <img src={purchase.row.original.file_url} alt=" " width="100px"/>
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
        accessor: "port",
        filterable: false,
        Cell: (purchase) => (<>
            <p>{purchase.row.original.port}</p>
        </>)
    },
    {
        Header: "limit",
        accessor: "limit",
        filterable: false,
        Cell: (purchase) => (<>
            <p>{purchase.row.original.limit}</p>
        </>)
    },
    {
        Header: "Type",
        accessor: "data_type",
        filterable: false,
        Cell: (purchase) => (<>
            <p>{purchase.row.original.data_type}</p>
        </>)
    },
    {
        Header: "Visit",
        accessor: "visit",
        filterable: false,
        Cell: (purchase) => (<>
            <p>{purchase.row.original.visit}</p>
        </>)
    },
    {
        Header: "",
        accessor: "action",
        filterable: false,
        Cell: (purchase) => (<>
        <div className="d-flex gap-4 pt-4">
            <div className="edit">
                <Button href = {"/ship-details/" + purchase.row.original.id} className="btn btn-soft-primary btn-sm edit-item-btn shadow-none"
                    data-bs-toggle="modal" data-bs-target="#showModal"><span><span className='pt-1'>more</span></span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-right "><g><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></g></svg></Button>
            </div>
        </div>

        </>)
    },
]
const ShipDataList = [
    {
        id: "1",
        file_url: ship1,
        date: "2022.1.3",
        score: "1000",
        port: "none",
        limit: "100t",
        data_type: "ship",
        visit: "3",
        action: "Detail"
    },
    {
        id: "2",
        file_url: ship1,
        date: "2022.1.3",
        score: "1000",
        port: "none",
        limit: "100t",
        data_type: "ship",
        visit: "3",
        action: "Detail"
    },
    {
        id: "3",
        file_url: ship1,
        date: "2022.1.3",
        score: "1000",
        port: "none",
        limit: "100t",
        data_type: "ship",
        visit: "3",
        action: "Detail"
    },
    {
        id: "4",
        file_url: ship1,
        date: "2022.1.3",
        score: "1000",
        port: "none",
        limit: "100t",
        data_type: "ship",
        visit: "3",
        action: "Detail"
    },
    {
        id: "5",
        file_url: ship1,
        date: "2022.1.3",
        score: "1000",
        port: "none",
        limit: "100t",
        data_type: "ship",
        visit: "3",
        action: "Detail"
    },
    {
        id: "6",
        file_url: ship1,
        date: "2022.1.3",
        score: "1000",
        port: "none",
        limit: "100t",
        data_type: "ship",
        visit: "3",
        action: "Detail"
    },
    {
        id: "7",
        file_url: ship1,
        date: "2022.1.3",
        score: "1000",
        port: "none",
        limit: "100t",
        data_type: "ship",
        visit: "3",
        action: "Detail"
    },
    {
        id: "8",
        file_url: ship1,
        date: "2022.1.3",
        score: "1000",
        port: "none",
        limit: "100t",
        data_type: "ship",
        visit: "3",
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
        Header: "From",
        accessor: "from",
        filterable: false,
        Cell: (purchase) => (<>
            <p>{purchase.row.original.from}</p>
        </>)
    },
    {
        Header: "To",
        accessor: "to",
        filterable: false,
        Cell: (purchase) => (<>
            <p>{purchase.row.original.to}</p>
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
        Header: "Status",
        accessor: "status",
        filterable: false,
        Cell: (purchase) => (<>
            <p>{purchase.row.original.status}</p>
        </>)
    },
    {
        Header: "Visit",
        accessor: "visit",
        filterable: false,
        Cell: (purchase) => (<>
            <p>{purchase.row.original.visit}</p>
        </>)
    },
    {
        Header: "",
        accessor: "action",
        filterable: false,
        Cell: (purchase) => (<>
        <div className="d-flex gap-4 pt-4">
            <div className="edit">
                <Button href = {"/ship-details/" + purchase.row.original.id} className="btn btn-soft-primary btn-sm edit-item-btn shadow-none"
                    data-bs-toggle="modal" data-bs-target="#showModal"><span><span className='pt-1'>more</span></span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-right "><g><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></g></svg></Button>
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
        from: "1000",
        to: "none",
        date: "100t",
        status: "ship",
        visit: "3",
        action: "Detail"
    },
    {
        id: "2",
        name: "material",
        amount: "20",
        from: "1000",
        to: "none",
        date: "100t",
        status: "ship",
        visit: "3",
        action: "Detail"
    },
    {
        id: "3",
        name: "material",
        amount: "20",
        from: "1000",
        to: "none",
        date: "100t",
        status: "ship",
        visit: "3",
        action: "Detail"
    },
    {
        id: "4",
        name: "material",
        amount: "20",
        from: "1000",
        to: "none",
        date: "100t",
        status: "ship",
        visit: "3",
        action: "Detail"
    },
    {
        id: "5",
        name: "material",
        amount: "20",
        from: "1000",
        to: "none",
        date: "100t",
        status: "ship",
        visit: "3",
        action: "Detail"
    },
    {
        id: "6",
        name: "material",
        amount: "20",
        from: "1000",
        to: "none",
        date: "100t",
        status: "ship",
        visit: "3",
        action: "Detail"
    },
    {
        id: "7",
        name: "material",
        amount: "20",
        from: "1000",
        to: "none",
        date: "100t",
        status: "ship",
        visit: "3",
        action: "Detail"
    },
    {
        id: "8",
        name: "material",
        amount: "20",
        from: "1000",
        to: "none",
        date: "100t",
        status: "ship",
        visit: "3",
        action: "Detail"
    },
    {
        id: "9",
        name: "material",
        amount: "20",
        from: "1000",
        to: "none",
        date: "100t",
        status: "ship",
        visit: "3",
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
        accessor: "file_url",
        filterable: false,
        Cell: (purchase) => (<p className="img-item">
            <img src={purchase.row.original.file_url} alt=" " width="100px"/>
        </p>)
    },
    {
        Header: "A/Unit",
        accessor: "unit",
        filterable: false,
        Cell: (purchase) => (<>
            <p>{purchase.row.original.unit}</p>
        </>)
    },
    {
        Header: "Price",
        accessor: "price",
        filterable: false,
        Cell: (purchase) => (<>
            <p>{purchase.row.original.price}</p>
        </>)
    },
    {
        Header: "licence",
        accessor: "licence",
        filterable: false,
        Cell: (purchase) => (<>
            <p>{purchase.row.original.licence}</p>
        </>)
    },
    {
        Header: "Visit",
        accessor: "visit",
        filterable: false,
        Cell: (purchase) => (<>
            <p>{purchase.row.original.visit}</p>
        </>)
    },
    {
        Header: "",
        accessor: "action",
        filterable: false,
        Cell: (purchase) => (<>
        <div className="d-flex gap-4 pt-4">
            <div className="edit">
                <Button href = {"/ship-details/" + purchase.row.original.id} className="btn btn-soft-primary btn-sm edit-item-btn shadow-none"
                    data-bs-toggle="modal" data-bs-target="#showModal"><span><span className='pt-1'>more</span></span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-right "><g><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></g></svg></Button>
            </div>
        </div>

        </>)
    },
]
const ProductDataList = [
    {
        id: "1",
        file_url: ship1,
        name: "none",
        unit: "100/t",
        price: "10, 000 $",
        licence: "D-4585514",
        action: "detail"
    },
    {
        id: "2",
        file_url: ship1,
        name: "none",
        unit: "100/t",
        price: "10, 000 $",
        licence: "D-4585514",
        action: "detail"
    },
    {
        id: "3",
        file_url: ship1,
        name: "none",
        unit: "100/t",
        price: "10, 000 $",
        licence: "D-4585514",
        action: "detail"
    },
    {
        id: "4",
        file_url: ship1,
        name: "none",
        unit: "100/t",
        price: "10, 000 $",
        licence: "D-4585514",
        action: "detail"
    },
    {
        id: "5",
        file_url: ship1,
        name: "none",
        unit: "100/t",
        price: "10, 000 $",
        licence: "D-4585514",
        action: "detail"
    },
    {
        id: "6",
        file_url: ship1,
        name: "none",
        unit: "100/t",
        price: "10, 000 $",
        licence: "D-4585514",
        action: "detail"
    },
    {
        id: "7",
        file_url: ship1,
        name: "none",
        unit: "100/t",
        price: "10, 000 $",
        licence: "D-4585514",
        action: "detail"
    },
    {
        id: "8",
        file_url: ship1,
        name: "none",
        unit: "100/t",
        price: "10, 000 $",
        licence: "D-4585514",
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
        accessor: "file_url",
        filterable: false,
        Cell: (purchase) => (<p className="img-item">
            <img src={purchase.row.original.file_url} alt=" " width="100px"/>
        </p>)
    },
    {
        Header: "A/Unit",
        accessor: "unit",
        filterable: false,
        Cell: (purchase) => (<>
            <p>{purchase.row.original.unit}</p>
        </>)
    },
    {
        Header: "Price",
        accessor: "price",
        filterable: false,
        Cell: (purchase) => (<>
            <p>{purchase.row.original.price}</p>
        </>)
    },
    {
        Header: "licence",
        accessor: "licence",
        filterable: false,
        Cell: (purchase) => (<>
            <p>{purchase.row.original.licence}</p>
        </>)
    },
    {
        Header: "Visit",
        accessor: "visit",
        filterable: false,
        Cell: (purchase) => (<>
            <p>{purchase.row.original.visit}</p>
        </>)
    },
    {
        Header: "",
        accessor: "action",
        filterable: false,
        Cell: (purchase) => (<>
        <div className="d-flex gap-4 pt-4">
            <div className="edit">
                <Button href = {"/ship-details/" + purchase.row.original.id} className="btn btn-soft-primary btn-sm edit-item-btn shadow-none"
                    data-bs-toggle="modal" data-bs-target="#showModal"><span><span className='pt-1'>more</span></span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-right "><g><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></g></svg></Button>
            </div>
        </div>

        </>)
    },
]
const GoodsDataList = [
    {
        id: "1",
        file_url: ship1,
        name: "none",
        unit: "100/t",
        price: "10, 000 $",
        licence: "D-4585514",
        action: "detail"
    },
    {
        id: "2",
        file_url: ship1,
        name: "none",
        unit: "100/t",
        price: "10, 000 $",
        licence: "D-4585514",
        action: "detail"
    },
    {
        id: "3",
        file_url: ship1,
        name: "none",
        unit: "100/t",
        price: "10, 000 $",
        licence: "D-4585514",
        action: "detail"
    },
    {
        id: "4",
        file_url: ship1,
        name: "none",
        unit: "100/t",
        price: "10, 000 $",
        licence: "D-4585514",
        action: "detail"
    },
    {
        id: "5",
        file_url: ship1,
        name: "none",
        unit: "100/t",
        price: "10, 000 $",
        licence: "D-4585514",
        action: "detail"
    },
    {
        id: "6",
        file_url: ship1,
        name: "none",
        unit: "100/t",
        price: "10, 000 $",
        licence: "D-4585514",
        action: "detail"
    },
    {
        id: "7",
        file_url: ship1,
        name: "none",
        unit: "100/t",
        price: "10, 000 $",
        licence: "D-4585514",
        action: "detail"
    },
    {
        id: "8",
        file_url: ship1,
        name: "none",
        unit: "100/t",
        price: "10, 000 $",
        licence: "D-4585514",
        action: "detail"
    },
]
export { columnsData, datasList, columnsShipData, ShipDataList, columnsLoadData, LoadDataList, columnsProductData, ProductDataList, columnsGoodsData, GoodsDataList}