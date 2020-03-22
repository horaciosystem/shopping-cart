import React from "react";
import * as Yup from "yup";
import { Field, useFormik } from "formik";
import { ProductItemType } from "types";

interface MyFormProps {
  initialValues: ProductItemType;
  onSubmit(values: ProductItemType): Promise<void>;
}

const ProductForm = (props: MyFormProps) => {
  const formik = useFormik({
    initialValues: props.initialValues,
    onSubmit: props.onSubmit
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Field name="name" />
      {formik.touched.name && formik.errors.name && (
        <div>{formik.errors.name}</div>
      )}
      <Field type="textarea" name="description" />
      {formik.touched.description && formik.errors.description && (
        <div>{formik.errors.description}</div>
      )}
      <Field name="brand" />
      {formik.touched.brand && formik.errors.brand && (
        <div>{formik.errors.brand}</div>
      )}
      <Field name="price" />
      {formik.touched.price && formik.errors.price && (
        <div>{formik.errors.price}</div>
      )}
      <Field name="color" />
      {formik.touched.color && formik.errors.color && (
        <div>{formik.errors.color}</div>
      )}
      <Field name="size" />
      {formik.touched.size && formik.errors.size && (
        <div>{formik.errors.size}</div>
      )}
      <button type="submit" disabled={formik.isSubmitting}>
        Submit
      </button>
    </form>
  );
};

export default ProductForm;
