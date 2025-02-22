import React, { useRef } from "react";
import { Col, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addProduct } from "../../tools/actions/productAction";

const Form = ({comingData, editData }) => {
    const imgRef = useRef();
    const titleRef = useRef();
    const priceRef = useRef();
    const descRef = useRef();

    const dispatch = useDispatch();

    const formSubmit = (e) => {
        e.preventDefault();
        comingData({
            img:imgRef.current.value,
            title:titleRef.current.value,
            price:priceRef.current.value,
            desc:descRef.current.value
        })
    };

    return (
        <div className="d-flex align-items-center justify-content-center">
            <Col sm={12} md={5}>
                <form onSubmit={formSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Img url</label>
                        <input
                            defaultValue={!editData ? "" : editData.img}
                            ref={imgRef}
                            type="text"
                            className="form-control"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input
                            defaultValue={!editData ? "" : editData.title}
                            ref={titleRef}
                            type="text"
                            className="form-control"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input
                            defaultValue={!editData ? "" : editData.price}
                            ref={priceRef}
                            type="text"
                            className="form-control"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">DescriptionI</label>
                        <input
                            defaultValue={!editData ? "" : editData.desc}
                            ref={descRef}
                            type="text"
                            className="form-control"
                        />
                    </div>

                    <button type="submit" className="btn btn-dark">
                        Add
                    </button>
                </form>
            </Col>
        </div>
    );
};

export default Form;
