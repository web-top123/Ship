import React, { useEffect, useState, useMemo } from "react";

import {
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  TabContent,
  TabPane,
  Row,
} from "reactstrap";

// RangeSlider
import "nouislider/distribute/nouislider.css";
import DeleteModal from "../../../Components/Common/DeleteModal";

import BreadCrumb from "../../../Components/Common/BreadCrumb";
import TableContainer from "../../../Components/Common/TableContainer";


//redux
import { Link } from "react-router-dom";

import { getDatas, deleteData } from "../../../helpers/fakebackend_helper";

const Datas = (props) => {
  // const dispatch = useDispatch();

  // const { datas } = useSelector((state) => ({
  //   datas: state.Data.dataList,
  // }));
  // const [data, setData] = useState(null);

  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    getDataList();
  }, []);

  const getDataList = () => {
    getDatas().then(res => {
      setDataList(res);
    })
  }

  // useEffect(() => {
  //   if (datas && !datas.length) {
  //     dispatch(onGetDatas());
  //   }
  // }, [dispatch, datas]);

  // useEffect(() => {
  //   setDataList(datas);
  // }, [datas]);

  // useEffect(() => {
  //   dispatch(onGetDatas());
  // }, [dispatch]);

  // useEffect(() => {
  //   if (!isEmpty(datas)) setDataList(datas);
  // }, [datas]);

  //delete order
  const [deleteModal, setDeleteModal] = useState(false);
  const [currentID, setCurrentID] = useState(false);

  const onClickDelete = (data) => {
    setCurrentID(data.id);
    // setData(data);
    setDeleteModal(true);
  };

  const handleDeleteData = () => {
    if (currentID) {
      deleteData(currentID).then(res => {
        if (res == 1) {
          getDataList();
          setDeleteModal(false);
        } else {
          setDeleteModal(false);
        }
      })
    }
  };

  const columns = useMemo(
    () => [
      {
        Header: "#",
        Cell: () => {
          return <input type="checkbox" />;
        },
      },
      {
        Header: "Name",
        accessor: "name",
        filterable: false,
      },
      {
        Header: "File_url",
        accessor: "file_url",
        filterable: false,
      },
      {
        Header: "Data_type",
        accessor: "data_type",
        filterable: false,
      },
      {
        Header: "Amount",
        accessor: "amount",
        filterable: false,
      },
      {
        Header: "Unit",
        accessor: "unit",
        filterable: false,
      },
      {
        Header: "Specification",
        accessor: "specification",
        filterable: false,
      },
      {
        Header: "Purpose",
        accessor: "purpose",
        filterable: false,
      },
      {
        Header: "Prediction_date",
        accessor: "prediction_date",
        filterable: false,
      },
      {
        Header: "Datacol",
        accessor: "datacol",
        filterable: false,
      },
      {
        Header: "From",
        accessor: "from",
        filterable: false,
      },
      {
        Header: "To",
        accessor: "to",
        filterable: false,
      },
      {
        Header: "Browses",
        accessor: "browses",
        filterable: false,
      },
      {
        Header: "Action",
        Cell: (cellProps) => {
          return (
            <UncontrolledDropdown>
              <DropdownToggle
                href="#"
                className="btn-soft-secondary btn-sm"
                tag="button"
              >
                <i className="ri-more-fill" />
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-end">
                <DropdownItem href={"admin-data-details/" + cellProps.row.original.id}>
                  <i className="ri-eye-fill align-bottom me-2 text-muted"></i>{" "}
                  View
                </DropdownItem>

                <DropdownItem href={"admin-add-data/" + cellProps.row.original.id}>
                  <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>{" "}
                  Edit
                </DropdownItem>

                <DropdownItem divider />
                <DropdownItem
                  href="#"
                  onClick={() => {
                    const dataData = cellProps.row.original;
                    onClickDelete(dataData);
                  }}
                >
                  <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i>{" "}
                  Delete
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          );
        },
      },
    ],
    []
  );
  document.title = "Datas";
  return (
    <div className="page-content">
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteData}
        onCloseClick={() => setDeleteModal(false)}
      />

      <Container fluid>
        <BreadCrumb title="Datas" pageTitle="Admin" />

        <Row>
          <div className="col-xl-12 col-lg-12">
            <div>
              <div className="card">
                <div className="card-header border-0">
                  <div className="row g-4">
                    <div className="col-sm-auto">
                      <div>
                        <Link
                          to="/admin-add-data"
                          className="btn btn-success"
                        >
                          <i className="ri-add-line align-bottom me-1"></i> Add
                          Data
                        </Link>
                      </div>
                    </div>
                    <div className="col-sm">
                      <div className="d-flex justify-content-sm-end">
                        <div className="search-box ms-2">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search Datas..."
                          />
                          <i className="ri-search-line search-icon"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <TabContent className="text-muted">
                    <TabPane>
                      <div
                        id="table-product-list-all"
                        className="table-card gridjs-border-none pb-2"
                      >
                        {dataList && dataList !== "" ? (
                          <TableContainer
                            columns={columns}
                            data={dataList}
                            isGlobalFilter={false}
                            isAddDataList={false}
                            customPageSize={10}
                            divClass="table-responsive mb-1"
                            tableClass="mb-0 table-borderless"
                            theadClass="table-light text-muted"
                          />
                        ) : (
                          <div className="py-4 text-center">
                            <div>
                              <lord-icon
                                src="https://cdn.lordicon.com/msoeawqm.json"
                                trigger="loop"
                                colors="primary:#405189,secondary:#0ab39c"
                                style={{ width: "72px", height: "72px" }}
                              ></lord-icon>
                            </div>

                            <div className="mt-4">
                              <h5>Sorry! No Result Found</h5>
                            </div>
                          </div>
                        )}
                      </div>
                    </TabPane>
                  </TabContent>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Datas;
