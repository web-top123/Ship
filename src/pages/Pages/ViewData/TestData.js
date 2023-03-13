import { downloadShipImage } from "../../../helpers/fakebackend_helper"

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
            <div>{purchase.row.original.morebtn}</div>
        </>)
    },
]

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
        Cell: (purchase) => (<div className="d-flex align-items-center"><div className="media-sm bg-light rounded p-1">
            <img src={purchase.row.original.image_url} alt=" " width="80px"/>
        </div></div>)
    },
    {
        Header: "Date",
        accessor: "date",
        filterable: false,
        Cell: (purchase) => (<>
            <p>{purchase.row.original.plan_date}</p>
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
        accessor: "ship_type",
        filterable: false,
        Cell: (purchase) => (<>
            <p>{purchase.row.original.type}</p>
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
            {purchase.row.original.morebtn}
        </>)
    },
]

//load data
const columnsLoadData = [
    {
        Header: "ID",
        accessor: "id",
        filterable: false,
        Cell: (purchase) => (<>
            <div>{purchase.row.original.id}</div>
        </>)
    },
    {
        Header: "Name",
        accessor: "name",
        filterable: false,
        Cell: (purchase) => (<>
            <div>{purchase.row.original.name}</div>
        </>)
    },
    {
        Header: "Amount",
        accessor: "amount",
        filterable: false,
        Cell: (purchase) => (<>
            <div>{purchase.row.original.amount}</div>
        </>)
    },
    {
        Header: "From",
        accessor: "from",
        filterable: false,
        Cell: (purchase) => (<>
            <div>{purchase.row.original.from}</div>
        </>)
    },
    {
        Header: "To",
        accessor: "to",
        filterable: false,
        Cell: (purchase) => (<>
            <div>{purchase.row.original.to}</div>
        </>)
    },
    {
        Header: "Date",
        accessor: "date",
        filterable: false,
        Cell: (purchase) => (<>
            <div>{purchase.row.original.date}</div>
        </>)
    },
    {
        Header: "Status",
        accessor: "status",
        filterable: false,
        Cell: (purchase) => (<>
            <div>{purchase.row.original.status}</div>
        </>)
    },
    {
        Header: "Visit",
        accessor: "visit",
        filterable: false,
        Cell: (purchase) => (<>
            <div>{purchase.row.original.visit}</div>
        </>)
    },
    {
        Header: "",
        accessor: "action",
        filterable: false,
        Cell: (purchase) => (<>
            {purchase.row.original.morebtn}
        </>)
    },
]

const columnsProductData = [
    {
        Header: "ID",
        accessor: "id",
        filterable: false,
        Cell: (purchase) => (<>
            <div>{purchase.row.original.id}</div>
        </>)
    },
    {
        Header: "Name",
        accessor: "name",
        filterable: false,
        Cell: (purchase) => (<>
            <div>{purchase.row.original.name}</div>
        </>)
    },
    {
        Header: "Photo",
        accessor: "file_url",
        filterable: false,
        Cell: (purchase) => (<div className="img-item">
            <img src={purchase.row.original.file_url} alt=" " width="100px"/>
        </div>)
    },
    {
        Header: "A/Unit",
        accessor: "unit",
        filterable: false,
        Cell: (purchase) => (<>
            <div>{purchase.row.original.unit}</div>
        </>)
    },
    {
        Header: "Price",
        accessor: "price",
        filterable: false,
        Cell: (purchase) => (<>
            <div>{purchase.row.original.price}</div>
        </>)
    },
    {
        Header: "licence",
        accessor: "licence",
        filterable: false,
        Cell: (purchase) => (<>
            <div>{purchase.row.original.licence}</div>
        </>)
    },
    {
        Header: "Visit",
        accessor: "visit",
        filterable: false,
        Cell: (purchase) => (<>
            <div>{purchase.row.original.visit}</div>
        </>)
    },
    {
        Header: "",
        accessor: "action",
        filterable: false,
        Cell: (purchase) => (<>
            {purchase.row.original.morebtn}
        </>)
    },
]

const columnsGoodData = [
    {
        Header: "ID",
        accessor: "id",
        filterable: false,
        Cell: (purchase) => (<>
            <div>{purchase.row.original.id}</div>
        </>)
    },
    {
        Header: "Name",
        accessor: "name",
        filterable: false,
        Cell: (purchase) => (<>
            <div>{purchase.row.original.name}</div>
        </>)
    },
    {
        Header: "Photo",
        accessor: "file_url",
        filterable: false,
        Cell: (purchase) => (<div className="img-item">
            <img src={purchase.row.original.file_url} alt=" " width="100px"/>
        </div>)
    },
    {
        Header: "A/Unit",
        accessor: "unit",
        filterable: false,
        Cell: (purchase) => (<>
            <div>{purchase.row.original.unit}</div>
        </>)
    },
    {
        Header: "Price",
        accessor: "price",
        filterable: false,
        Cell: (purchase) => (<>
            <div>{purchase.row.original.price}</div>
        </>)
    },
    {
        Header: "licence",
        accessor: "licence",
        filterable: false,
        Cell: (purchase) => (<>
            <div>{purchase.row.original.licence}</div>
        </>)
    },
    {
        Header: "Visit",
        accessor: "visit",
        filterable: false,
        Cell: (purchase) => (<>
            <div>{purchase.row.original.visit}</div>
        </>)
    },
    {
        Header: "",
        accessor: "action",
        filterable: false,
        Cell: (purchase) => (<>
           {purchase.row.original.morebtn}
        </>)
    },
]

export { columnsData, columnsShipData, columnsLoadData, columnsProductData, columnsGoodData }