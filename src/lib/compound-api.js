//example id: aa4a0d37-a72c-4243-9eda-02321a6311c0
function searchBySMILES(smiles = "C1=CC(=C(C=C1O)O)O", onError = d => console.log(d)) {
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
    return fetch(url, options).then(
        response => {
            if (response.ok) {
                return response.text();
            }
            return response.text().then(err => {
                onError(err);
                return Promise.reject({
                    status: response.status,
                    statusText: response.statusText,
                    errorMessage: err,
                });
            });
        })
        .then(queryId => {
            const url = "https://api.rsc.org/compounds/v1/filter/95ba5cc7-3e32-4042-99ae-6ecc49541472/results";
            const options = {
                method: "GET",
                headers: {
                    "apikey": "M0oFG8rEI7kOb7fyW3QmVi70vQT9Dl5D",
                    "Accept": "application/json"
                },
            };
            return fetch(url, options).then(
                response => {
                    if (response.ok) {
                        return response.json();
                    }
                    return response.text().then(err => {
                        onError(err);
                        return Promise.reject({
                            status: response.status,
                            statusText: response.statusText,
                            errorMessage: err,
                        });
                    });
                })
                .then(r => {
                    console.log('queryID', r.results[0]);
                    const queryId = r.results[0];
                    const url = `https://api.rsc.org/compounds/v1/records/${queryId}/image`;
                    const options = {
                        method: "GET",
                        headers: {
                            "apikey": "M0oFG8rEI7kOb7fyW3QmVi70vQT9Dl5D",
                            "Accept": "application/json"
                        },
                    };
                    return fetch(url, options).then(
                        response => {
                            if (response.ok) {
                                return response.json();
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
                            return `data:image/gif;base64,${data.image}`;
                        })
                        .catch(err => {
                            console.error(err);
                        });
                })
                .catch(err => {
                    onError(err);
                    console.error(err);
                });
        })
        .catch(err => {
            console.error(err);
        });
}

export { searchBySMILES }