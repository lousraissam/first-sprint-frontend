import axios from "axios";
import swal from "sweetalert";

const onSubmit = (values) => {
    console.log(values);
    axios
      .post("http://127.0.0.1:8080/citizen/confirmation", values)
      .then(res => {
        console.log(res.data);

        swal("Inscription réussie!", res.data, "success").then(value => {
          window.location = "/Login";
        });
      })
      .catch(error => {
        console.log(error);
        swal("Error!", error.data, "error");
      });
  };