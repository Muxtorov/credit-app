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
            placeholder="№"
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
                  Риштон шахар Рошидоний кучаси.
                </td>
              </tr>
            </table>
          </div>
          Бир томондан Риштон тумани Давлат хизматлари маркази томонидан 23
          апрел 2021 йил кунги №1383866- сон билан рўйхатдан ўтган устав асосида
          фаолият кўрсатувчи Риштон тумани ЯТТ раҳбари М,Мухожиров (кейинги
          ўринларда «Сотувчи») ва {shaxs.address} яшовчи фуқаро {shaxs.username}{" "}
          {shaxs.surname} {shaxs.sheriff} (шахсини тасдиқловчи ҳужжат: Паспорт
          серия {shaxs.pasSerNum} ФАРГОНА ВИЛОЯТИ РИШТОН ТУМАНИ ИИБ томонидан{" "}
          {shaxs.birthDate} да берилган) Риштон туман {shaxs.workplace}{" "}
          лавозимида ишловчи (кейинги ўринларда «Ҳаридор») иккинчи томондан ва
          учинчи томондан {shaxs.guarantor} да яшовчи фуқаро (кейинги ўринларда
          «Кафил» ушбу шартномани тарафлар ўртасида ўзаро келишув асосида
          қуйидагилар тўғрисида тузилди.
          <h3 align="center">1.ШАРТНОМА МАЗМУНИ</h3>
          1.1 «Сотувчи» қуйидаги маҳсулотларни «Харидор»га {data.lifetime} (
          <TextField
            id="standard-helperText"
            placeholder="Муддат"
            value={qiymat}
            onChange={(v) => {
              setQiymat(v.target.value);
            }}
            style={{ width: "150px" }}
          />
          ) ой муддат давомида қийматини бўлиб тўлаш шарти билан сотади.
        </div>
        <TableContainer component={Paper}>
          <Table aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell>T/r</TableCell>
                <TableCell align="right">Махсулот номи</TableCell>
                <TableCell align="right">Сони</TableCell>
                <TableCell align="right">Махсулот нархи</TableCell>
                <TableCell align="right">Махсулотни бўлиб тўлаш</TableCell>
                <TableCell align="right">Умумий киймати</TableCell>
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
          1.2. Шартноманинг умумий қиймати {data.total} (
          <TextField
            id="standard-helperText"
            placeholder="қиймат"
            value={time}
            onChange={(v) => {
              setTime(v.target.value);
            }}
            style={{ width: "250px" }}
          />
          ) сўмни ташкил қилади. <br /> 2.1 Ўзбекистон Республикаси Фуқаролик
          кодексининг 422-моддасига асосан Товарни насияга сотиш шартномасида
          товар ҳақини бўлиб-бўлиб тўланади, сотиб олинаётган махсулот(лар)
          қийматининг қолган қисмини «Харидор» ўз ойлик иш хақисидан ёки бошқа
          даромадлари ҳисобидан ҳар ойининг 25 кунига қадар мазкур шартноманинг
          ажралмас қисми бўлган жадвал –илова асосида тўлаб боради. 2.2. Харидор
          кейинги тўловни шартнома шартларида назарда тутилганидан кўра кўпроқ
          миқдорда тўловни амалга ошириш хуқуқига эга. 2.3. Харидор қолган
          сўммани тўлов графиги бўйича тўлаши шарт. 2.4. Харидор олган товарни
          ой муддатга олгандан сўнг қарзини тўламагунча ижара сифатида
          фойдаланиб туради. Қарзини тўлиқ тўлагандан сўнг олинган товар
          харидорники хисобланади. Сотувчи томонидан тақдим этилган тўлов
          жадвали бўйича тўловларни вақтида амалга оширмаса сотувчи томонидан
          берилган товарларни қайтариб олиш хуқуқига эга бўлиб ва олдинги
          тўловлар қайтариб берилмайди. (ижара сифатида ушлаб қолинади). 2.5.
          Олувчи 2 ой давомида ҳеч кандай тўлов килмаса огоҳлантириш хати билан
          огоҳлантирилади. Шундан кейин ҳам тўлов амалга оширилмаса, сотувчи
          шартномани 100% суммасини ундириш учун иқтисодий ёки фуқаролик
          судларига мурожаат килиш ҳуқуқига эгадир. 2.6. «Харидор» сотиб олган
          махсулот(лар)нинг қийматини мазкур шартноманинг 1.1. ва
          2.1.-бандларида кўрсатилган муддатдан олдин тўлиқ тўласа, шартнома
          қийматини «Сотувчи» томонидан чегирма килинади. 2.7 «Харидор»
          томонидан мазкур шартноманинг 1.1-бандида кўрсатилган махсулот(лар)
          киймати тўлиқ тўланмагунига қадар «Сотувчи» нинг шахсий мулки
          хисобланади.
          <h3 align="center">3. МАХСУЛОТ(ЛАР)НИ ЕТКАЗИШ ТАРТИБИ.</h3>
          3.1. Шартнома расмийлаштирилган кундан бошлаб 3 кун ичида товар
          харидор томонидан олиб кетилиши шарт. 3.2. Товарни жўнатишга оид барча
          транспорт ва бошқа харажатларни харидор тўлайди. 3.3. Мазкур
          шартномага кўра товарлар харидорнинг транспортида жўнатилади.
          <h3 align="center">4.ТОМОНЛАРНИНГ ХУҚУҚ ВА МАЖБУРИЯТЛАРИ.</h3>
          4.1 «Сотувчи»нинг ҳуқуқлари: -«Сотувчи» «Харидор»дан харид килаётган
          товарини бўлиб тўлашга қобиляти, оила аъзоларини розилиги, оиладаги
          молиявий ҳолатни ўрганиши ва тахлил қилиши. - Тўловлар харидор
          томонидан кечиктирилган такдирда, «Сотувчи» томонидан телефон алоқа,
          почта алоқа тизимлари орқали «Харидор» ва «Кафил»ларнинг иш жойи ёки
          яшаш манзилига бориб огохлантириши мумкин. -«Харидор»дан сотиб олинган
          махсулот(лар) тўловини ўз вақтида тўланишини талаб қилиб бориш; -икки
          ёки ундан ортик маротаба тўловларни амалга оширмаган такдирда, иш жойи
          раҳбариятига карздорликни ундириш юзасидан амалий ёрдам бериш ҳақида
          ёзма мурожаат килиш. -«Харидор» тўловларни икки ёки ундан ортиқ
          маротаба кечиктирган тақдирда, сотиб олинган махсулот(лар)ни мазкур
          шартноманинг 2.4-бандига асосан кайтариб олиш чораларини кўради ва
          махсулот(лар) учун тўланган тўловларни ижара тўлови (эскириш қиймати)
          хисобига қабул килиш; -«Харидор» сотиб олинган махсулот(лар) учун
          тўловларни тўлаш муддатидан кечиктирган такдирда, кечиктирилган хар
          бир кун учун тўланмаган карздорлик суммасига нисбатан 0,4% пеня
          хисоблаш, бироқ бунда пенянинг умумий суммаси тўланмаган карздорлик
          сумманинг 50% микдоридан оширмаслик; -«Харидор» томонидан шартнома ва
          иловада белгиланган тўлов кунидан 60 кундан ортик муддатда тўлов
          амалга оширилмаган ёки шартноманинг бошка шартлари бузилган такдирда
          қарздорликни муддатидан аввал ундириш юзасидан суд органларига
          мурожаат килиш;
          <h3 align="center">4.2. «Сотувчи»нинг мажбуриятлари:</h3>
          -шартнома тузилгандан сўнг 3 кун ичида «Харидор» га махсулот(лар)ни
          тўлиқ ва бут холатда (кафолат таллони тўлдирилган холда) хужжатлари
          билан топшириш; -сотиб олинган махсулот(лар) учун ҳисоб-фактура такдим
          этиш; -носоз. Сифатсиз махсулот(лар)ни («Харидор»нинг айби билан юзага
          келган носозликлар бундан мустасно) 3 кун ичида алмаштириб бериш;
          <h3 align="center">4.3.«Харидор» нинг хуқуқлари;</h3>
          -агарда сотиб олинган махсулот(лар) носоз ва сифатсиз бўлган тақдирда
          3 кун ичида қайтариб бериш ва бошқасига алмаштириш; -махсулот(лар)
          нинг сертификати, кафолат таллони ва тўлов жадвалини талаб қилиб олиш;
          -махсулот(лар) кабул килинганидан сўнг. Кафолат муддати давомида
          вужудга келган носозликлар («Харидор»нинг айби билан юзага келган
          носозликлар бундан мустасно) юзасидан ушбу кафолат таллонида
          кўрсатилган ишлаб чиқарувчининг сервис хизматларига мурожаат килиш;
          <h3 align="center">4.4. «Харидор»нинг мажбуриятлари: </h3> -шартнома
          тузилгандан сўнг, сотиб олинаётган махсулот(лар) учун олдиндан тўлов
          қилиш ; -«Сотувчи»дан махсулот(лар)ни тўлиқ ва бутлигини текшириш
          хамда 3 кун ичида қабул қилиб олиш; -сотиб олинган махсулот(лар) учун
          тўловларни ўз вақтида амалга ошириш; -тўловлар тўлиқ тўланмагунига
          қадар мазкур шартноманинг 1.1-бандида кўрсатилган махсулот(лар)ни
          белгиланган тартибда сақлаш, бутлигини таъминлаш ҳамда қатъиян бошқа
          шахсларга сотмаслик, ўзаро келишувларни умуман амалга оширмаслик; -иш
          жойи, яшаш манзили ва бошқа маълумотлари ўзгарган такдирда, 5 кун
          муддат ичида «Сотувчи»га хабар бериш;
          <h3 align="center">5.ТОМОНЛАРНИНГ ЖАВОБГАРЛИГИ. </h3>
          5.1. Томонлар ушбу шартнома шартларини бажармаганда ва белгиланган
          шартларга риоя қилмаганда амалдаги қонунчилик олдида жавобгардирлар.
          5.2. Ушбу шартнома шартларини бажармаслиги оқибитида юзага келган
          низоли вазиятлар Ўзбекистон Республикасининг амалдаги қонун
          хужжатларига амал килган холда музокаралар йўли билан хал қиладилар.
          Томонларнинг келишувига эришилмаган тақдирда низолар суд органлари
          томонидан хал қилинади.
          <h3 align="center">
            6.ШАРТНОМАНИ ЎЗГАРТИРИШ ВА БЕКОР КИЛИШ ТАРТИБИ.
          </h3>
          6.1. Ушбу шартномага хар қандай ўзгартириш ва қўшимчалар улар ёзма
          равишда расмийлаштирилган ва тарафларнинг ваколатли шахслари томонидан
          имзоланган тақдирда хақиқий хисобланади. 6.2. Шартнома муддатидан
          олдин бекор қилишга тарафларнинг келишувига мувофиқ ёки Ўзбекистон
          Республикасининг амалдаги қонун хужжатларида назарда тутилган
          асосларга кўра, етказилган зарар қопланган холда йўл қўйилади.
          <h3 align="center">7.БОШҚА ШАРТЛАР.</h3>
          7.1. «Харидор» томонидан махсулот(лар)ни қайтарилган тақдирда, 3 кун
          муддат ичида таққослаш далолатномаси асосида хисоб-китоб қилинади ва
          30 кун давомида қарздорлик бартараф этилмаса, ушбу махсулот(лар)
          хисобидан натура шаклида қарздорлик қопланади. 7.2. Ушбу шартнома
          «Харидор» томонидан махсулот(лар) тўлиқ қабул қилиб олинган вақтдан
          бошлаб кучга киради ва ушбу шартнома бўйича мажбуриятлар тўлиқ
          бажарилгунга кадар амал килади. 7.3. Ушбу шартнома ҳар қайси томон
          учун бир хил юридик кучга эга бўлган 2 нусхада тузилди.
        </div>
        <div>
          <h3 align="center">8. ТОМОНЛАРНИНГ МАНЗИЛЛАРИ.</h3>
          <Grid container>
            <Grid item md={6}>
              <table>
                <tr>
                  <td align="center">«СОТУВЧИ»</td>
                </tr>
                <tr>
                  <td>ЯТТ МУХОЖИРОВ МУХСИНХЎЖА</td>
                </tr>
                <tr>
                  <td>Манзил: Риштон шахар Рошидоний кучаси</td>
                </tr>
                <tr>
                  <td>ЯТТ Мухожиров Мухсинхўжа</td>
                </tr>
                <tr>
                  <td>20218000005384518001</td>
                </tr>
                <tr>
                  <td>Телефон: 97 036 10 10; Тел2: 97 037 10 10</td>
                </tr>
                <tr>
                  <td> Клик рақами : 8600053219297666</td>
                </tr>
                <tr>
                  <td>Рахбар: М.Мухожиров </td>
                </tr>
                <tr>
                  <td>(имзо)____________</td>
                </tr>
              </table>
            </Grid>
            <Grid item md={6}>
              <table>
                <tr align="center">
                  <td>«ХАРИДОР»</td>
                </tr>
                <tr>
                  <td>
                    {shaxs.username} {shaxs.surname}
                  </td>
                </tr>
                <tr>
                  <td>Манзил: {shaxs.address}</td>
                </tr>
                <tr>
                  <td>Паспорт: {shaxs.pasSerNum}</td>
                </tr>
                <tr>
                  <td>Иш жойи:{shaxs.workplace}</td>
                </tr>
                <tr>
                  <td>Тел 1: {shaxs.phone}</td>
                </tr>
                <tr>
                  <td>Тел 2: {shaxs.phone2}</td>
                </tr>
                <tr>
                  <td>Фуқаро: {shaxs.guarantor}</td>
                </tr>
                <tr>
                  <td>(имзо)____________</td>
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
                <td>ТЎЛОВ ЖАДВАЛИ</td>
              </tr>
            </table>
          </Grid>
          <Grid item md={6}>
            <table>
              <tr>
                <td>Шартнома № {nomer} га илова </td>
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
                  <TableCell>Махсулот(лар) нархи</TableCell>
                  <TableCell align="right">Олдиндан тўлов сўммаси</TableCell>
                  <TableCell align="right">Қарздорлик сўммаси</TableCell>
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
                  <TableCell align="right">Тўлов санаси</TableCell>
                  <TableCell align="right">Олдиндан тўлов суммаси</TableCell>
                  <TableCell align="right">Қарздорлик сўммаси</TableCell>
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
            ЮК ХАТИ \ ХИСОБВАРАҚ-ФАКТУРА №{" "}
            <TextField
              id="standard-helperText"
              placeholder="№"
              value={yuknomer}
              onChange={(v) => {
                setYuknomer(v.target.value);
              }}
              style={{ marginLeft: "20px", width: "65px" }}
            />
          </p>
          {sana} йилдаги №{nomer}-сонли муддатли тулов шарти билан тузилган
          олди-сотди шартномасига асосан
        </div>
        <br />
        <div>
          <Grid container>
            <Grid item md={6}>
              <table>
                <tr>
                  <td>
                    <span style={{ borderBottom: "3px solid black" }}>
                      «СОТУВЧИ»
                    </span>
                  </td>
                </tr>
                <tr>
                  <td border="none">ЯТТ Мухожиров Мухсинхўжа</td>
                </tr>
                <tr>
                  <td>Манзил: Риштон шахар Рошидоний кучаси</td>
                </tr>
                <tr>
                  <td>Х/р: 20218000005384518001</td>
                </tr>
                <tr>
                  <td>МФО: 00520</td>
                </tr>
                <tr>
                  <td>Банк:</td>
                </tr>
                <tr>
                  <td>Телефон: 97 036 10 10; Тел2: 97 037 10 10</td>
                </tr>
              </table>
            </Grid>
            <Grid item md={1}></Grid>
            <Grid item md={5}>
              <table>
                <tr>
                  <td>
                    <span style={{ borderBottom: "3px solid black" }}>
                      «ХАРИДОР»
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    {shaxs.username} {shaxs.surname}
                  </td>
                </tr>
                <tr>
                  <td>Манзил: {shaxs.address}</td>
                </tr>

                <tr>
                  <td>Хужжат : {shaxs.pasSerNum}</td>
                </tr>

                <tr>
                  <td>Тел 1: {shaxs.phone}</td>
                </tr>
                <tr>
                  <td>Тел 2: {shaxs.phone2}</td>
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
                    <TableCell align="right">Махсулот номи</TableCell>
                    <TableCell align="right">Сони</TableCell>
                    <TableCell align="right">Махсулот нархи</TableCell>
                    <TableCell align="right">Умумий киймати</TableCell>
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
                  <td>Топширдим</td>
                </tr>
                <tr>
                  <td>Рахбар ___________ Мухожиров Мухсинхўжа</td>
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
                  <td>Олдим</td>
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
          <div>Ишончнома бўйича</div>
          <div>Махсулотни бериб юбордим _______________________</div>
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
