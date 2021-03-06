import { Button, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import emblema from "../image_2021-09-20_10-17-21.png";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import apiUrl from "../config/httpConnect";
import { useHistory } from "react-router-dom";

const Contract = () => {
  let history = useHistory();

  const data = useSelector((state) => state.cart.data);

  const shaxs = useSelector((state) => {
    return state.cart.customer;
  });

  const dispatch = useDispatch();

  const [nomer, setNomer] = useState("");
  const [time, setTime] = useState("");
  const [qiymat, setQiymat] = useState("");

  const [sana, setSana] = useState("");
  const [yuknomer, setYuknomer] = useState("");

  const becksend = () => {
    let malumot = {
      customer: `${shaxs.id}`,
      outgoingOrder: `${data.id}`,
      contract: [
        {
          contNum: `${nomer}`,
          contDate: `${sana}`,
          lifetime: `${time}`,
          contTotal: `${qiymat}`,
          shippingNum: `${yuknomer}`,
        },
      ],
    };

    axios
      .post(apiUrl.url + "/contracts", malumot)
      .then(() => {
        dispatch({ type: "SET_CONTRACT", payload: { malumot } });
      })
      .then(() => {
        history.push({
          pathname: "/pdf",
        });
      });
  };

  const bulibTulash = data.total / data.lifetime;

  return (
    <div
      style={{
        marginRight: "2%",
        justifyContent: "center",
        display: "flex",
        fontSize: "18px",
      }}
    >
      <div
        style={{
          textAlign: "justify",
          width: "95%",
        }}
      >
        <img src={emblema} style={{ position: "absolute" }} alt="" />
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          Shartnoma
          <TextField
            id="standard-helperText"
            placeholder="???"
            value={nomer}
            onChange={(v) => {
              setNomer(v.target.value);
            }}
            style={{ marginLeft: "20px", width: "65px" }}
          />
        </h1>
        <div>
          <div>
            <table width="100%">
              <tr>
                <TextField
                  id="standard-helperText"
                  placeholder="Sanani kiriting"
                  onChange={(v) => {
                    setSana(v.target.value);
                  }}
                />
                <td width="70%" align="right">
                  ???????????? ?????????? ?????????????????? ????????????.
                </td>
              </tr>
            </table>
          </div>
          ?????? ???????????????? ???????????? ???????????? ???????????? ???????????????????? ?????????????? ?????????????????? 23
          ?????????? 2021 ?????? ?????????? ???1383866- ?????? ?????????? ?????????????????? ?????????? ?????????? ??????????????
          ?????????????? ???????????????????? ???????????? ???????????? ?????? ?????????????? ??,?????????????????? (??????????????
          ?????????????????? ??????????????????) ???? {shaxs.address} ???????????? ???????????? {shaxs.username}{" "}
          {shaxs.surname} {shaxs.sheriff} (?????????????? ?????????????????????? ????????????: ??????????????
          ?????????? {shaxs.pasSerNum} ?????????????? ?????????????? ???????????? ???????????? ?????? ??????????????????{" "}
          {shaxs.birthDate} ???? ????????????????) ???????????? ?????????? {shaxs.workplace}{" "}
          ???????????????????? ?????????????? (?????????????? ?????????????????? ??????????????????) ?????????????? ???????????????? ????
          ???????????? ???????????????? {shaxs.guarantor} ???? ???????????? ???????????? (?????????????? ??????????????????
          ?????????????? ???????? ???????????????????? ???????????????? ???????????????? ?????????? ?????????????? ??????????????
          ?????????????????????? ?????????????????? ??????????????.
          <h3 align="center">1.???????????????? ??????????????</h3>
          1.1 ?????????????????? ???????????????? ?????????????????????????? ?????????????????????? {data.lifetime} (
          <TextField
            id="standard-helperText"
            placeholder="????????????"
            value={qiymat}
            onChange={(v) => {
              setQiymat(v.target.value);
            }}
            style={{ width: "150px" }}
          />
          ) ???? ???????????? ???????????????? ?????????????????? ?????????? ?????????? ?????????? ?????????? ????????????.
        </div>
        <TableContainer component={Paper}>
          <Table aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell>T/r</TableCell>
                <TableCell align="right">???????????????? ????????</TableCell>
                <TableCell align="right">????????</TableCell>
                <TableCell align="right">???????????????? ??????????</TableCell>
                <TableCell align="right">???????????????????? ?????????? ??????????</TableCell>
                <TableCell align="right">???????????? ??????????????</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.items.map((item, ind) => (
                <TableRow key={ind}>
                  <TableCell>{ind + 1}</TableCell>
                  <TableCell align="right">{item.title}</TableCell>
                  <TableCell align="right">{item.quantity}</TableCell>
                  <TableCell align="right">{item.price}</TableCell>
                  <TableCell align="right"> {bulibTulash} </TableCell>
                  <TableCell align="right">{data.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <div>
          1.2. ???????????????????????? ???????????? ?????????????? {data.total} (
          <TextField
            id="standard-helperText"
            placeholder="????????????"
            value={time}
            onChange={(v) => {
              setTime(v.target.value);
            }}
            style={{ width: "250px" }}
          />
          ) ?????????? ???????????? ????????????. <br /> 2.1 ???????????????????? ???????????????????????? ??????????????????
          ?????????????????????? 422-?????????????????? ???????????? ?????????????? ?????????????? ?????????? ????????????????????????
          ?????????? ???????????? ??????????-?????????? ????????????????, ?????????? ???????????????????? ????????????????(??????)
          ?????????????????????? ???????????? ?????????????? ?????????????????? ???? ?????????? ???? ?????????????????? ?????? ??????????
          ?????????????????????? ?????????????????? ?????? ?????????????? 25 ???????????? ?????????? ???????????? ????????????????????????
          ???????????????? ?????????? ???????????? ???????????? ????????????? ?????????????? ?????????? ????????????. 2.2. ??????????????
          ?????????????? ?????????????? ???????????????? ???????????????????? ?????????????? ???????????????????????? ???????? ????????????
          ???????????????? ?????????????? ???????????? ???????????? ???????????????? ??????. 2.3. ?????????????? ????????????
          ?????????????? ?????????? ?????????????? ???????????? ???????????? ????????. 2.4. ?????????????? ?????????? ??????????????
          ???? ???????????????? ???????????????? ???????? ?????????????? ?????????????????????? ?????????? ????????????????
          ???????????????????? ????????????. ?????????????? ?????????? ???????????????????? ???????? ?????????????? ??????????
          ?????????????????????? ??????????????????????. ?????????????? ?????????????????? ???????????? ?????????????? ??????????
          ?????????????? ???????????? ???????????????????? ?????????????? ???????????? ???????????????? ?????????????? ??????????????????
          ???????????????? ???????????????????? ???????????????? ???????? ???????????????? ?????? ?????????? ???? ??????????????
          ???????????????? ???????????????? ????????????????????. (?????????? ???????????????? ?????????? ????????????????). 2.5.
          ???????????? 2 ???? ???????????????? ?????? ???????????? ?????????? ?????????????? ???????????????????????? ???????? ??????????
          ??????????????????????????????. ???????????? ?????????? ?????? ?????????? ???????????? ????????????????????, ??????????????
          ???????????????????? 100% ?????????????????? ?????????????? ???????? ?????????????????? ?????? ??????????????????
          ?????????????????? ???????????????? ?????????? ???????????????? ????????????. 2.6. ?????????????????? ?????????? ??????????
          ????????????????(??????)???????? ?????????????????? ???????????? ???????????????????????? 1.1. ????
          2.1.-???????????????????? ?????????????????????? ?????????????????? ?????????? ?????????? ????????????, ????????????????
          ?????????????????? ?????????????????? ?????????????????? ?????????????? ????????????????. 2.7 ??????????????????
          ?????????????????? ???????????? ???????????????????????? 1.1-?????????????? ?????????????????????? ????????????????(??????)
          ?????????????? ?????????? ?????????????????????????? ?????????? ?????????????????? ???????? ???????????? ??????????
          ??????????????????????.
          <h3 align="center">3. ????????????????(??????)???? ?????????????? ??????????????.</h3>
          3.1. ???????????????? ?????????????????????????????????? ???????????? ???????????? 3 ?????? ?????????? ??????????
          ?????????????? ?????????????????? ???????? ???????????????? ????????. 3.2. ?????????????? ?????????????????? ?????? ??????????
          ?????????????????? ???? ?????????? ???????????????????????? ?????????????? ??????????????. 3.3. ????????????
          ???????????????????? ???????? ???????????????? ?????????????????????? ???????????????????????? ????????????????????.
          <h3 align="center">4.???????????????????????? ?????????? ???? ??????????????????????????.</h3>
          4.1 ?????????????????????????? ??????????????????: -?????????????????? ???????????????????????? ?????????? ??????????????????
          ???????????????? ?????????? ?????????????? ????????????????, ???????? ???????????????????? ????????????????, ????????????????
          ???????????????? ?????????????? ???????????????? ???? ???????????? ????????????. - ???????????????? ??????????????
          ?????????????????? ?????????????????????????? ????????????????, ?????????????????? ?????????????????? ?????????????? ??????????,
          ?????????? ?????????? ?????????????????? ???????????? ?????????????????? ???? ???????????????????????????? ???? ???????? ??????
          ???????? ?????????????????? ?????????? ?????????????????????????? ????????????. -???????????????????????? ?????????? ??????????????
          ????????????????(??????) ???????????????? ???? ?????????????? ???????????????????? ?????????? ?????????? ??????????; -????????
          ?????? ?????????? ?????????? ???????????????? ???????????????????? ???????????? ?????????????????? ????????????????, ???? ????????
          ???????????????????????? ???????????????????????? ?????????????? ???????????????? ???????????? ?????????? ?????????? ????????????
          ???????? ???????????????? ??????????. -?????????????????? ???????????????????? ???????? ?????? ?????????? ??????????
          ???????????????? ?????????????????????? ????????????????, ?????????? ?????????????? ????????????????(??????)???? ????????????
          ???????????????????????? 2.4-?????????????? ???????????? ???????????????? ???????? ???????????????????? ???????????? ????
          ????????????????(??????) ???????? ???????????????? ???????????????????? ?????????? ???????????? (?????????????? ??????????????)
          ???????????????? ?????????? ??????????; -?????????????????? ?????????? ?????????????? ????????????????(??????) ????????
          ???????????????????? ?????????? ???????????????????? ?????????????????????? ????????????????, ?????????????????????????? ??????
          ?????? ?????? ???????? ???????????????????? ???????????????????? ?????????????????? ???????????????? 0,4% ????????
          ????????????????, ?????????? ?????????? ???????????????? ???????????? ?????????????? ???????????????????? ????????????????????
          ?????????????????? 50% ???????????????????? ????????????????????; -?????????????????? ?????????????????? ???????????????? ????
          ?????????????? ?????????????????????? ?????????? ?????????????? 60 ???????????? ?????????? ???????????????? ??????????
          ???????????? ?????????????????????? ?????? ???????????????????????? ?????????? ???????????????? ???????????????? ????????????????
          ???????????????????????? ???????????????????? ?????????? ?????????????? ???????????????? ?????? ??????????????????????
          ???????????????? ??????????;
          <h3 align="center">4.2. ?????????????????????????? ??????????????????????????:</h3>
          -???????????????? ?????????????????????? ???????? 3 ?????? ?????????? ?????????????????? ???? ????????????????(??????)????
          ?????????? ???? ?????? ?????????????? (?????????????? ?????????????? ?????????????????????? ??????????) ????????????????????
          ?????????? ????????????????; -?????????? ?????????????? ????????????????(??????) ???????? ??????????-?????????????? ????????????
          ????????; -??????????. ???????????????? ????????????????(??????)???? (?????????????????????????? ???????? ?????????? ??????????
          ???????????? ?????????????????????? ???????????? ????????????????) 3 ?????? ?????????? ???????????????????? ??????????;
          <h3 align="center">4.3.?????????????????? ???????? ??????????????????;</h3>
          -???????????? ?????????? ?????????????? ????????????????(??????) ?????????? ???? ???????????????? ???????????? ????????????????
          3 ?????? ?????????? ???????????????? ?????????? ???? ?????????????????? ????????????????????; -????????????????(??????)
          ???????? ??????????????????????, ?????????????? ?????????????? ???? ?????????? ?????????????????? ?????????? ?????????? ????????;
          -????????????????(??????) ?????????? ???????????????????????? ????????. ?????????????? ?????????????? ????????????????
          ?????????????? ???????????? ?????????????????????? (?????????????????????????? ???????? ?????????? ?????????? ????????????
          ?????????????????????? ???????????? ????????????????) ???????????????? ???????? ?????????????? ??????????????????
          ?????????????????????? ?????????? ?????????????????????????? ???????????? ???????????????????????? ???????????????? ??????????;
          <h3 align="center">4.4. ?????????????????????????? ??????????????????????????: </h3> -????????????????
          ?????????????????????? ????????, ?????????? ???????????????????? ????????????????(??????) ???????? ???????????????? ??????????
          ?????????? ; -???????????????????????? ????????????????(??????)???? ?????????? ???? ?????????????????? ????????????????
          ?????????? 3 ?????? ?????????? ?????????? ?????????? ????????; -?????????? ?????????????? ????????????????(??????) ????????
          ???????????????????? ???? ?????????????? ???????????? ????????????; -???????????????? ?????????? ??????????????????????????
          ?????????? ???????????? ???????????????????????? 1.1-?????????????? ?????????????????????? ????????????????(??????)????
          ?????????????????????? ???????????????? ????????????, ?????????????????? ?????????????????? ?????????? ?????????????? ??????????
          ?????????????????? ??????????????????, ?????????? ???????????????????????? ???????????? ???????????? ????????????????????; -????
          ????????, ???????? ?????????????? ???? ?????????? ???????????????????????? ???????????????? ????????????????, 5 ??????
          ???????????? ?????????? ?????????????????????? ?????????? ??????????;
          <h3 align="center">5.???????????????????????? ????????????????????????. </h3>
          5.1. ???????????????? ???????? ???????????????? ???????????????????? ???????????????????????? ???? ??????????????????????
          ?????????????????? ???????? ???????????????????? ???????????????? ???????????????????? ???????????? ????????????????????????????.
          5.2. ???????? ???????????????? ???????????????????? ???????????????????????? ?????????????????? ?????????? ????????????
          ???????????? ?????????????????? ???????????????????? ???????????????????????????????? ???????????????? ??????????
          ???????????????????????? ???????? ???????????? ?????????? ?????????????????????? ???????? ?????????? ?????? ??????????????????.
          ???????????????????????? ???????????????????? ?????????????????????? ???????????????? ?????????????? ?????? ??????????????????
          ?????????????????? ?????? ????????????????.
          <h3 align="center">
            6.???????????????????? ???????????????????? ???? ?????????? ?????????? ??????????????.
          </h3>
          6.1. ???????? ???????????????????? ?????? ???????????? ???????????????????? ???? ???????????????????? ???????? ????????
          ?????????????? ?????????????????????????????????? ???? ???????????????????????? ?????????????????? ???????????????? ??????????????????
          ???????????????????? ???????????????? ?????????????? ??????????????????????. 6.2. ???????????????? ????????????????????
          ?????????? ?????????? ?????????????? ???????????????????????? ???????????????????? ?????????????? ?????? ????????????????????
          ???????????????????????????????? ???????????????? ?????????? ???????????????????????? ?????????????? ????????????????
          ?????????????????? ????????, ???????????????????? ?????????? ?????????????????? ?????????? ?????? ????????????????.
          <h3 align="center">7.?????????? ??????????????.</h3>
          7.1. ?????????????????? ?????????????????? ????????????????(??????)???? ?????????????????????? ????????????????, 3 ??????
          ???????????? ?????????? ?????????????????? ?????????????????????????? ?????????????? ??????????-?????????? ???????????????? ????
          30 ?????? ???????????????? ???????????????????? ???????????????? ????????????????, ???????? ????????????????(??????)
          ?????????????????? ???????????? ?????????????? ???????????????????? ??????????????????. 7.2. ???????? ????????????????
          ?????????????????? ?????????????????? ????????????????(??????) ?????????? ?????????? ?????????? ?????????????? ??????????????
          ???????????? ?????????? ???????????? ???? ???????? ???????????????? ???????????? ???????????????????????? ??????????
          ???????????????????????? ?????????? ???????? ????????????. 7.3. ???????? ???????????????? ?????? ?????????? ??????????
          ???????? ?????? ?????? ???????????? ?????????? ?????? ???????????? 2 ?????????????? ??????????????.
        </div>
        <div>
          <h3 align="center">8. ???????????????????????? ????????????????????.</h3>
          <Grid container>
            <Grid item md={6}>
              <table>
                <tr>
                  <td align="center">??????????????????</td>
                </tr>
                <tr>
                  <td>?????? ?????????????????? ????????????????????</td>
                </tr>
                <tr>
                  <td>????????????: ???????????? ?????????? ?????????????????? ????????????</td>
                </tr>
                <tr>
                  <td>?????? ?????????????????? ????????????????????</td>
                </tr>
                <tr>
                  <td>20218000005384518001</td>
                </tr>
                <tr>
                  <td>??????????????: 97 036 10 10; ??????2: 97 037 10 10</td>
                </tr>
                <tr>
                  <td> ???????? ???????????? : 8600053219297666</td>
                </tr>
                <tr>
                  <td>????????????: ??.?????????????????? </td>
                </tr>
                <tr>
                  <td>(????????)____________</td>
                </tr>
              </table>
            </Grid>
            <Grid item md={6}>
              <table>
                <tr align="center">
                  <td>??????????????????</td>
                </tr>
                <tr>
                  <td>
                    {shaxs.username} {shaxs.surname}
                  </td>
                </tr>
                <tr>
                  <td>????????????: {shaxs.address}</td>
                </tr>
                <tr>
                  <td>??????????????: {shaxs.pasSerNum}</td>
                </tr>
                <tr>
                  <td>???? ????????:{shaxs.workplace}</td>
                </tr>
                <tr>
                  <td>?????? 1: {shaxs.phone}</td>
                </tr>
                <tr>
                  <td>?????? 2: {shaxs.phone2}</td>
                </tr>
                <tr>
                  <td>????????????: {shaxs.guarantor}</td>
                </tr>
                <tr>
                  <td>(????????)____________</td>
                </tr>
              </table>
            </Grid>
          </Grid>
        </div>
        <div style={{ margin: "50px" }} />
        <Grid container>
          <Grid item md={6}>
            <table>
              <tr>
                <td>?????????? ??????????????</td>
              </tr>
            </table>
          </Grid>
          <Grid item md={6}>
            <table>
              <tr>
                <td>???????????????? ??? {nomer} ???? ?????????? </td>
              </tr>
            </table>
          </Grid>
        </Grid>
        <br />
        <Grid container>
          <TableContainer component={Paper}>
            <Table aria-label="spanning table">
              <TableHead>
                <TableRow>
                  <TableCell>????????????????(??????) ??????????</TableCell>
                  <TableCell align="right">???????????????? ?????????? ??????????????</TableCell>
                  <TableCell align="right">???????????????????? ??????????????</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.items.map((item, ind) => (
                  <TableRow key={ind}>
                    <TableCell>{data.total}</TableCell>
                    <TableCell align="right">Oldindan tulov</TableCell>
                    <TableCell align="right">Qarzdorlik</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <br />
        <br />
        <br />
        <Grid container>
          <TableContainer component={Paper}>
            <Table aria-label="spanning table">
              <TableHead>
                <TableRow>
                  <TableCell>T/r</TableCell>
                  <TableCell align="right">?????????? ????????????</TableCell>
                  <TableCell align="right">???????????????? ?????????? ??????????????</TableCell>
                  <TableCell align="right">???????????????????? ??????????????</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.payments.map((item, ind) => (
                  <TableRow key={ind}>
                    <TableCell>{ind + 1}</TableCell>
                    <TableCell align="right">
                      {item.startDate.slice(0, 10)}
                    </TableCell>
                    <TableCell align="right">Oldindan tulov summasi</TableCell>
                    <TableCell align="right">{item.paymentAmount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <br />
        <br />
        <div>
          <p style={{ fontSize: "30px" }}>
            ???? ???????? \ ????????????????????-?????????????? ???{" "}
            <TextField
              id="standard-helperText"
              placeholder="???"
              value={yuknomer}
              onChange={(v) => {
                setYuknomer(v.target.value);
              }}
              style={{ marginLeft: "20px", width: "65px" }}
            />
          </p>
          {sana} ?????????????? ???{nomer}-?????????? ???????????????? ?????????? ?????????? ?????????? ????????????????
          ????????-?????????? ???????????????????????? ????????????
        </div>
        <br />
        <div>
          <Grid container>
            <Grid item md={6}>
              <table>
                <tr>
                  <td>
                    <span style={{ borderBottom: "3px solid black" }}>
                      ??????????????????
                    </span>
                  </td>
                </tr>
                <tr>
                  <td border="none">?????? ?????????????????? ????????????????????</td>
                </tr>
                <tr>
                  <td>????????????: ???????????? ?????????? ?????????????????? ????????????</td>
                </tr>
                <tr>
                  <td>??/??: 20218000005384518001</td>
                </tr>
                <tr>
                  <td>??????: 00520</td>
                </tr>
                <tr>
                  <td>????????:</td>
                </tr>
                <tr>
                  <td>??????????????: 97 036 10 10; ??????2: 97 037 10 10</td>
                </tr>
              </table>
            </Grid>
            <Grid item md={1}></Grid>
            <Grid item md={5}>
              <table>
                <tr>
                  <td>
                    <span style={{ borderBottom: "3px solid black" }}>
                      ??????????????????
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    {shaxs.username} {shaxs.surname}
                  </td>
                </tr>
                <tr>
                  <td>????????????: {shaxs.address}</td>
                </tr>

                <tr>
                  <td>???????????? : {shaxs.pasSerNum}</td>
                </tr>

                <tr>
                  <td>?????? 1: {shaxs.phone}</td>
                </tr>
                <tr>
                  <td>?????? 2: {shaxs.phone2}</td>
                </tr>
              </table>
            </Grid>
          </Grid>
          <Grid container>
            <TableContainer component={Paper}>
              <Table aria-label="spanning table">
                <TableHead>
                  <TableRow>
                    <TableCell>T/r</TableCell>
                    <TableCell align="right">???????????????? ????????</TableCell>
                    <TableCell align="right">????????</TableCell>
                    <TableCell align="right">???????????????? ??????????</TableCell>
                    <TableCell align="right">???????????? ??????????????</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.items.map((item, ind) => (
                    <TableRow key={ind}>
                      <TableCell>{ind + 1}</TableCell>
                      <TableCell align="right">{item.title}</TableCell>
                      <TableCell align="right">{item.quantity}</TableCell>
                      <TableCell align="right">{item.price}</TableCell>
                      <TableCell align="right">{data.total}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <br />
          (____________________________)
          <br />
          <Grid container>
            <Grid item md={6}>
              <table>
                <tr>
                  <td>??????????????????</td>
                </tr>
                <tr>
                  <td>???????????? ___________ ?????????????????? ????????????????????</td>
                </tr>
                <tr>
                  <br />
                </tr>
                <tr></tr>
              </table>
            </Grid>
            <Grid item md={6}>
              <table>
                <tr>
                  <td>??????????</td>
                </tr>
                <tr>
                  <td>___________ ____________________________</td>
                </tr>
                <tr>
                  <br />
                </tr>
                <tr></tr>
              </table>
            </Grid>
          </Grid>
          <div>?????????????????? ????????????</div>
          <div>???????????????????? ?????????? ?????????????? _______________________</div>
        </div>
        <Button
          style={{
            display: "flex",
            marginTop: "30px",
            float: "end",
            marginBottom: "30px",
          }}
          variant="contained"
          color="primary"
          disableElevation
          onClick={() => {
            becksend();
          }}
        >
          Chop etish
        </Button>
      </div>
    </div>
  );
};

export default Contract;
