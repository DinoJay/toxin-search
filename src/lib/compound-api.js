//example id: aa4a0d37-a72c-4243-9eda-02321a6311c0
function execute(smiles = "C1=CC(=C(C=C1O)O)O") {
    const url = "https://api.rsc.org/compounds/v1/filter/smiles";
    const options = {
        method: "POST",
        headers: {
            "apikey": "M0oFG8rEI7kOb7fyW3QmVi70vQT9Dl5D",
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "smiles": smiles
        }),
    };
    fetch(url, options).then(
        response => {
            if (response.ok) {
                return response.text();
            }
            return response.text().then(err => {
                return Promise.reject({
                    status: response.status,
                    statusText: response.statusText,
                    errorMessage: err,
                });
            });
        })
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.error(err);
        });
}