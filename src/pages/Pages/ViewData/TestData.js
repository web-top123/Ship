
const columnsData = [
    {
        Header: "ID",
        accessor: "id",
        filterable: false,
        Cell: (params) => (<>
            <p>{params.row.original.id}</p>
        </>)
    },
    {
        Header: "Name",
        accessor: "name",
        filterable: false,
        Cell: (params) => (<>
            <p>{params.row.original.dataname}</p>
        </>)
    },
    {
        Header: "Date",
        accessor: "date",
        filterable: false,
        Cell: (params) => (<>
            <p>{params.row.original.votedate}</p>
        </>)
    },
    {
        Header: "Visitor",
        accessor: "visitor",
        filterable: false,
        Cell: (params) => (<>
            <p>{params.row.original.username}</p>
        </>)
    },
    {
        Header: "V.Date",
        accessor: "vdate",
        filterable: false,
        Cell: (params) => (<>
            <p>{params.row.original.createdAt}</p>
        </>)
    },
    {
        Header: "",
        accessor: "action",
        filterable: false,
        Cell: (params) => (<>
            <p>{params.row.original.morebtn}</p>
        </>)
    },
]

//about ship
const columnsShipData = [
    {
        Header: "ID",
        accessor: "id",
        filterable: false,
        Cell: (params) => (<>
            <p>{params.row.original.id}</p>
        </>)
    },
    {
        Header: "Photo",
        accessor: "file_url",
        filterable: false,
        Cell: (params) => (<div className="d-flex align-items-center"><div className="media-sm bg-light rounded p-1">
            <img src={params.row.original.image_url} alt=" " width="80px"/>
        </div></div>)
    },
    {
        Header: "Date",
        accessor: "date",
        filterable: false,
        Cell: (params) => (<>
            <p>{params.row.original.plan_date}</p>
        </>)
    },
    {
        Header: "Port",
        accessor: "port",
        filterable: false,
        Cell: (params) => (<>
            <p>{params.row.original.port}</p>
        </>)
    },
    {
        Header: "limit",
        accessor: "limit",
        filterable: false,
        Cell: (params) => (<>
            <p>{params.row.original.limit}</p>
        </>)
    },
    {
        Header: "Type",
        accessor: "ship_type",
        filterable: false,
        Cell: (params) => (<>
            <p>{params.row.original.type}</p>
        </>)
    },
    {
        Header: "Visit",
        accessor: "visit",
        filterable: false,
        Cell: (params) => (<>
            <p>{params.row.original.visit}</p>
        </>)
    },
    {
        Header: "",
        accessor: "action",
        filterable: false,
        Cell: (params) => (<>
            {params.row.original.morebtn}
        </>)
    },
]

//load data
const columnsLoadData = [
    {
        Header: "ID",
        accessor: "id",
        filterable: false,
        Cell: (params) => (<>
            <div>{params.row.original.id}</div>
        </>)
    },
    {
        Header: "Name",
        accessor: "name",
        filterable: false,
        Cell: (params) => (<>
            <div>{params.row.original.name}</div>
        </>)
    },
    {
        Header: "Amount",
        accessor: "amount",
        filterable: false,
        Cell: (params) => (<>
            <div>{params.row.original.amount}</div>
        </>)
    },
    {
        Header: "From",
        accessor: "from",
        filterable: false,
        Cell: (params) => (<>
            <div>{params.row.original.from}</div>
        </>)
    },
    {
        Header: "To",
        accessor: "to",
        filterable: false,
        Cell: (params) => (<>
            <div>{params.row.original.to}</div>
        </>)
    },
    {
        Header: "Date",
        accessor: "date",
        filterable: false,
        Cell: (params) => (<>
            <div>{params.row.original.date}</div>
        </>)
    },
    {
        Header: "Status",
        accessor: "status",
        filterable: false,
        Cell: (params) => (<>
            <div>{params.row.original.status}</div>
        </>)
    },
    {
        Header: "Visit",
        accessor: "visit",
        filterable: false,
        Cell: (params) => (<>
            <div>{params.row.original.visit}</div>
        </>)
    },
    {
        Header: "",
        accessor: "action",
        filterable: false,
        Cell: (params) => (<>
            {params.row.original.morebtn}
        </>)
    },
]

const columnsProductData = [
    {
        Header: "ID",
        accessor: "id",
        filterable: false,
        Cell: (params) => (<>
            <div>{params.row.original.id}</div>
        </>)
    },
    {
        Header: "Name",
        accessor: "name",
        filterable: false,
        Cell: (params) => (<>
            <div>{params.row.original.name}</div>
        </>)
    },
    {
        Header: "Photo",
        accessor: "file_url",
        filterable: false,
        Cell: (params) => (<div className="img-item">
            <img src={params.row.original.file_url} alt=" " width="100px"/>
        </div>)
    },
    {
        Header: "A/Unit",
        accessor: "unit",
        filterable: false,
        Cell: (params) => (<>
            <div>{params.row.original.unit}</div>
        </>)
    },
    {
        Header: "Price",
        accessor: "price",
        filterable: false,
        Cell: (params) => (<>
            <div>{params.row.original.price}</div>
        </>)
    },
    {
        Header: "licence",
        accessor: "licence",
        filterable: false,
        Cell: (params) => (<>
            <div>{params.row.original.licence}</div>
        </>)
    },
    {
        Header: "Visit",
        accessor: "visit",
        filterable: false,
        Cell: (params) => (<>
            <div>{params.row.original.visit}</div>
        </>)
    },
    {
        Header: "",
        accessor: "action",
        filterable: false,
        Cell: (params) => (<>
            {params.row.original.morebtn}
        </>)
    },
]

const columnsGoodData = [
    {
        Header: "ID",
        accessor: "id",
        filterable: false,
        Cell: (params) => (<>
            <div>{params.row.original.id}</div>
        </>)
    },
    {
        Header: "Name",
        accessor: "name",
        filterable: false,
        Cell: (params) => (<>
            <div>{params.row.original.name}</div>
        </>)
    },
    {
        Header: "Photo",
        accessor: "file_url",
        filterable: false,
        Cell: (params) => (<div className="img-item">
            <img src={params.row.original.file_url} alt=" " width="100px"/>
        </div>)
    },
    {
        Header: "A/Unit",
        accessor: "unit",
        filterable: false,
        Cell: (params) => (<>
            <div>{params.row.original.unit}</div>
        </>)
    },
    {
        Header: "Price",
        accessor: "price",
        filterable: false,
        Cell: (params) => (<>
            <div>{params.row.original.price}</div>
        </>)
    },
    {
        Header: "licence",
        accessor: "licence",
        filterable: false,
        Cell: (params) => (<>
            <div>{params.row.original.licence}</div>
        </>)
    },
    {
        Header: "Visit",
        accessor: "visit",
        filterable: false,
        Cell: (params) => (<>
            <div>{params.row.original.visit}</div>
        </>)
    },
    {
        Header: "",
        accessor: "action",
        filterable: false,
        Cell: (params) => (<>
           {params.row.original.morebtn}
        </>)
    },
]

export { columnsData, columnsShipData, columnsLoadData, columnsProductData, columnsGoodData }