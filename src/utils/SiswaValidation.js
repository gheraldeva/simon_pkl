const FormValidation = (datasiswa) =>  {
    if (datasiswa.nama) {
        console.log("lolos");
        return true;
    }
    if (!datasiswa.nama) {
        console.log("hay");
        return "Name Required."

    }
}

export {FormValidation}