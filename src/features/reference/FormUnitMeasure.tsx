import {
  OpenUnitMeasureProp,
  openUnitMeasures,
} from "config/rtk/rtkUnitMeasure";
import React, { forwardRef, Ref, useEffect, useRef, useState } from "react";
import { REQUEST_EDIT, REQUEST_SAVE } from "tools/consts";
import {
  payementMode0,
  UnitMeasure,
  unitMeasure0,
  UnitMeasureJson,
} from "tools/types";
import List from "widgets/List";

type FormUnitMeasureProps = {
  unitMeasure: UnitMeasure;
};
const FormUnitMeasure = (
  { unitMeasure }: FormUnitMeasureProps,
  ref: Ref<void>
) => {
  const unitMeasuresToOpen: OpenUnitMeasureProp = openUnitMeasures();
  const unitMeasureJson: UnitMeasureJson = unitMeasuresToOpen.data;
  const unitMeasures: UnitMeasure[] = unitMeasureJson.content;
  const refetchUnitMeasure: () => void = unitMeasuresToOpen.refetch;
  const saveUnitMeasure = unitMeasuresToOpen.save;
  const editUnitMeasure = unitMeasuresToOpen.edit;

  //const { data = [], isFetching, refetch } = usePaginationUnitMeasuresQuery(0);
  const [unitMeasure1, setUnitMeasure1] = useState<UnitMeasure>(unitMeasure0);
  const [request, setRequest] = useState(REQUEST_SAVE);

  //const [save] = useAddUnitMeasureMutation();

  const [form, setForm] = useState(false);

  const [disabled, setDisabled] = useState(true);

  const [show, setShow] = useState(false);
  const open = (u: UnitMeasure) => {
    setUnitMeasure1(u);
    setShow(true);
  };
  useEffect(() => {
    //@ts-ignore
    ref.current = open;
  });

  const closed = () => {
    setShow(false);
    setDisabled(true);
  };

  const del = useRef(null);
  const archive = useRef(null);
  const restore = useRef(null);

  const [page, setPage] = useState(0);
  const loadPage = (p: number) => {
    setPage(p);
    refetchUnitMeasure();
  };

  const showFormulaire = (unitMeasure: UnitMeasure) => {
    setUnitMeasure1(unitMeasure);
    setForm(true);
    setRequest(REQUEST_EDIT);
  };

  const FormAsUpdate = (unitMeasure: UnitMeasure) => {
    setDisabled(false);
    open(unitMeasure);
  };

  const void_ = () => {};

  //const [updateUnitMeasure] = useEditUnitMeasureMutation();

  return (
    <List
      head={["Désignation", "Symbole", "Décimal"]}
      body={["design#attr", "symbole#attr", "date#date", "decimal#attr"]}
      list={unitMeasures}
      emptyObject={payementMode0}
    />
  );
};

export default forwardRef(FormUnitMeasure);
