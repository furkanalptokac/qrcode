import qrcode from 'qrcode';

const data = "Test data";

// if your data is object, you have to stringify it
// const dataStr = JSON.stringify(data);

qrcode.toString(data, {type: 'terminal'}, (err, code) => {
    if (err) console.error(err);

    console.log(code);
});

qrcode.toDataURL(data, (err, code) => {
    if (err) console.error(err);

    console.log(code);
});

qrcode.toFile('./img/qrcode.png', data);

