import { Trash2, X } from "lucide-react";
import { useState } from "react";
import { useSessionStorage } from "../../hooks/useStorage";
import { emptyObj } from "./constants/employee-constants";
import { Employee } from "./constants/employee-record-types";
import "./styles/index.scss";

export default function EmployRecords() {
  const [employeesInfo, setEmployeesInfo] = useSessionStorage<Employee[]>(
    "employees",
    []
  );

  const [newEmployee, setNewEmployee] = useState<Employee>(emptyObj);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [record, setRecord] = useState<Employee>(employeesInfo[0]);

  const handleAddEmployee = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      newEmployee &&
      newEmployee.name &&
      newEmployee.age &&
      newEmployee.dob &&
      newEmployee.phone
    ) {
      let newEmployeeWithId = { ...newEmployee, id: crypto.randomUUID() };
      setEmployeesInfo((prevEmployees) => [
        ...prevEmployees,
        newEmployeeWithId,
      ]);
      setNewEmployee(emptyObj);
      setOpenModal(false);
    }
  };

  const showRecord = (_eid: string) => {
    let recordToShow = employeesInfo.filter((e) => e.id === _eid)[0];
    setRecord(recordToShow);
  };

  const dltRecord = (_eid: string) => {
    setEmployeesInfo((prevState) => prevState.filter((e) => e.id !== _eid));
  };

  return (
    <>
      <div className="records-container">
        <div className="top-bar">
          <div className="logo">Employee Records</div>
          <div className="add-btn-cont">
            <button
              className="add-btn"
              onClick={() => setOpenModal(!openModal)}
            >
              Add New Employee
            </button>
          </div>
        </div>
        {employeesInfo && employeesInfo.length > 0 && (
          <div className="dashboard">
            <div className="left">
              {employeesInfo?.map((e: Employee) => {
                return (
                  <div className="employee" key={e.id}>
                    <div className="name" onClick={() => showRecord(e.id)}>
                      {e.name}
                    </div>
                    <div className="dlt-btn-cont">
                      <button
                        className="dlt-btn"
                        onClick={() => dltRecord(e.id)}
                      >
                        <Trash2 />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            {record && (
              <div className="right">
                <div className="employee-details">
                  <div className="name">
                    <h3 className="label">Name : </h3>
                    <span>{record.name}</span>
                  </div>
                  <div className="age">
                    <h3 className="label">Age : </h3>
                    <span>{record.age}</span>
                  </div>
                  <div className="phone">
                    <h3 className="label">Phone : </h3>
                    <span>{record.phone}</span>
                  </div>
                  <div className="dob">
                    <h3 className="label">D.O.B : </h3>
                    <span>{record.dob}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <dialog open={openModal} className={`modal ${openModal && "open"}`}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <span className="close" onClick={() => setOpenModal(false)}>
            <X />
          </span>
          <form>
            <h2>Add New Employee Details</h2>
            <div className="form-container">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={newEmployee.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setNewEmployee({ ...newEmployee, name: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Age</label>
                <input
                  type="number"
                  name="age"
                  value={newEmployee.age}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setNewEmployee({
                      ...newEmployee,
                      age: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="number"
                  name="phone"
                  maxLength={10}
                  minLength={10}
                  value={newEmployee.phone}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setNewEmployee({
                      ...newEmployee,
                      phone: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-group">
                <label>D.O.B</label>
                <input
                  type="date"
                  name="dob"
                  value={newEmployee.dob}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setNewEmployee({ ...newEmployee, dob: e.target.value })
                  }
                />
              </div>
              <div className="add-dialog-btn-cont">
                <button className="dialog-add-btn" onClick={handleAddEmployee}>
                  Add Data
                </button>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}
