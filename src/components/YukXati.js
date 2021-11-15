import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";
import emblema from "../image_2021-09-20_10-17-21.png";
Font.register({
  family: "Roboto",
  src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf",
});

const YukXati = ({ contract, shaxs, data }) => {
  const foo = contract.contract[0];
  const bulibTulash = data.total / data.lifetime;
  return (
    <Document>
      {console.log("Natija Foo: ", foo)}
      {console.log("Natija Shaxs: ", shaxs)}
      {console.log("Natija Data: ", data)}
      <Page size="A4" style={styles.page}>
        <View
          style={{
            marginRight: 2,
            justifyContent: "center",
            display: "flex",
            fontSize: "18px",
            width: "100%",
          }}
        >
          <View
            style={{
              textAlign: "justify",
              width: "96%",
              paddingTop: "2%",
              margin: "auto",
            }}
          >
            <Image
              src={emblema}
              style={{ width: "120px", height: "auto" }}
              alt="B10"
            />
            <Text
              style={{
                display: "flex",
                alignItems: "center",
                fontFamily: "Roboto",
                fontSize: 20,
                textAlign: "center",
              }}
            >
              ШАРТНОМА № {foo.contNum}
            </Text>
            <Text
              style={{
                display: "flex",
                alignItems: "center",
                fontFamily: "Roboto",
                fontSize: 12,
                textAlign: "center",
              }}
            >
              (Муддатли тўлов шарти билан олди-сотди шартномаси)
            </Text>
            <View
              style={{
                flex: 1,
                justifyContent: "space-between",
                flexDirection: "row",
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  alignItems: "center",
                  fontFamily: "Roboto",
                  fontSize: 10,
                  textAlign: "center",
                }}
              >
                {foo.contDate} йил
              </Text>
              <Text
                style={{
                  alignItems: "center",
                  fontFamily: "Roboto",
                  fontSize: 10,
                  textAlign: "center",
                }}
              >
                Риштон шахар Рошидоний кучаси .
              </Text>
            </View>
            <View>
              <Text style={styles.textlar}>
                Бир томондан Риштон тумани Давлат хизматлари маркази томонидан
                23 апрел 2021 йил кунги №1383866- сон билан рўйхатдан ўтган
                устав асосида фаолият кўрсатувчи Риштон тумани ЯТТ раҳбари
                М,Мухожиров (кейинги ўринларда «Сотувчи») ва {shaxs.address}{" "}
                яшовчи фуқаро {shaxs.username} {shaxs.surname} {shaxs.sheriff}{" "}
                (шахсини тасдиқловчи ҳужжат: Паспорт серия {shaxs.pasSerNum}{" "}
                ФАРГОНА ВИЛОЯТИ РИШТОН ТУМАНИ ИИБ томонидан {shaxs.birthDate}{" "}
                берилган) Риштон туман
                {shaxs.workplace} лавозимида ишловчи (кейинги ўринларда
                «Ҳаридор») иккинчи томондан ва учинчи томондан
                {shaxs.guarantor} да яшовчи фуқаро (кейинги ўринларда «Кафил»
                ушбу шартномани тарафлар ўртасида ўзаро келишув асосида
                қуйидагилар тўғрисида тузилди.
              </Text>
            </View>
            <View>
              <Text style={styles.titlelar}>1.ШАРТНОМА МАЗМУНИ</Text>
            </View>
            <View>
              <Text style={styles.textlar}>
                1.1 «Сотувчи» қуйидаги маҳсулотларни «Харидор»га {data.lifetime}
                ( {foo.qitmat} ) ой муддат давомида қийматини бўлиб тўлаш шарти
                билан сотади.
              </Text>
            </View>

            <View style={styles.table}>
              <View style={styles.tableRow}>
                <View style={styles.jadval}>
                  <Text style={styles.tableCell}>T\p</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>Махсулот номи</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>Сони</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>Махсулот нархи</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>Махсулотни бўлиб тўлаш</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>Умумий киймати</Text>
                </View>
              </View>

              {data.items.map((item, ind) => (
                <View key={ind} style={styles.tableRow}>
                  <View style={styles.jadval}>
                    <Text style={styles.tableCell}>{ind + 1}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{item.title}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{item.quantity}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{item.price}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{bulibTulash}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{data.total}</Text>
                  </View>
                </View>
              ))}
            </View>
            <View style={{ marginTop: 19 }}>
              <Text style={styles.textlar}>
                1.2. Шартноманинг умумий қиймати {data.total}({contract.time})
                сўмни ташкил қилади.
              </Text>
            </View>
            <View style={{ marginTop: 5 }}>
              <Text style={styles.textlar}>
                2.1 Ўзбекистон Республикаси Фуқаролик кодексининг 422-моддасига
                асосан Товарни насияга сотиш шартномасида товар ҳақини
                бўлиб-бўлиб тўланади, сотиб олинаётган махсулот(лар) қийматининг
                қолган қисмини «Харидор» ўз ойлик иш хақисидан ёки бошқа
                даромадлари ҳисобидан ҳар ойининг 25 кунига қадар мазкур
                шартноманинг ажралмас қисми бўлган жадвал –илова асосида тўлаб
                боради.
              </Text>
            </View>
            <View style={{ marginTop: 5 }}>
              <Text style={styles.textlar}>
                <View>
                  <Text style={styles.titlelar}>
                    2.2. Харидор кейинги тўловни шартнома шартларида назарда
                    тутилганидан кўра кўпроқ миқдорда тўловни амалга ошириш
                    хуқуқига эга.
                  </Text>
                </View>
              </Text>
            </View>
            <View style={{ marginTop: 5 }}>
              <Text style={styles.textlar}>
                2.3. Харидор қолган сўммани тўлов графиги бўйича тўлаши шарт.
              </Text>
            </View>
            <View style={{ marginTop: 5 }}>
              <Text style={styles.textlar}>
                2.4. Харидор олган товарни ой муддатга олгандан сўнг қарзини
                тўламагунча ижара сифатида фойдаланиб туради. Қарзини тўлиқ
                тўлагандан сўнг олинган товар харидорники хисобланади. Сотувчи
                томонидан тақдим этилган тўлов жадвали бўйича тўловларни вақтида
                амалга оширмаса сотувчи томонидан берилган товарларни қайтариб
                олиш хуқуқига эга бўлиб ва олдинги тўловлар қайтариб берилмайди.
                (ижара сифатида ушлаб қолинади).
              </Text>
            </View>
            <View style={{ marginTop: 5 }}>
              <Text style={styles.textlar}>
                2.5. Олувчи 2 ой давомида ҳеч кандай тўлов килмаса огоҳлантириш
                хати билан огоҳлантирилади. Шундан кейин ҳам тўлов амалга
                оширилмаса, сотувчи шартномани 100% суммасини ундириш учун
                иқтисодий ёки фуқаролик судларига мурожаат килиш ҳуқуқига
                эгадир.
              </Text>
            </View>
            <View style={{ marginTop: 5 }}>
              <Text style={styles.textlar}>
                2.6. «Харидор» сотиб олган махсулот(лар)нинг қийматини мазкур
                шартноманинг 1.1. ва 2.1.-бандларида кўрсатилган муддатдан олдин
                тўлиқ тўласа, шартнома қийматини «Сотувчи» томонидан чегирма
                килинади.
              </Text>
            </View>
            <View style={{ marginTop: 5 }}>
              <Text style={styles.textlar}>
                2.7 «Харидор» томонидан мазкур шартноманинг 1.1-бандида
                кўрсатилган махсулот(лар) киймати тўлиқ тўланмагунига қадар
                «Сотувчи» нинг шахсий мулки хисобланади.
              </Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.titlelar}>
                3. МАХСУЛОТ(ЛАР)НИ ЕТКАЗИШ ТАРТИБИ.
              </Text>
            </View>
            <View style={{ marginTop: 5 }}>
              <Text style={styles.textlar}>
                3.1. Шартнома расмийлаштирилган кундан бошлаб 3 кун ичида товар
                харидор томонидан олиб кетилиши шарт.
              </Text>
            </View>
            <View style={{ marginTop: 5 }}>
              <Text style={styles.textlar}>
                3.2. Товарни жўнатишга оид барча транспорт ва бошқа харажатларни
                харидор тўлайди.
              </Text>
            </View>
            <View style={{ marginTop: 5 }}>
              <Text style={styles.textlar}>
                3.3. Мазкур шартномага кўра товарлар харидорнинг транспортида
                жўнатилади.
              </Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.titlelar}>
                4.ТОМОНЛАРНИНГ ХУҚУҚ ВА МАЖБУРИЯТЛАРИ.
              </Text>
            </View>
            <View style={{ marginTop: 2 }}>
              <Text style={styles.textlar}>
                4.1 «Сотувчи»нинг ҳуқуқлари: -«Сотувчи» «Харидор»дан харид
                килаётган товарини бўлиб тўлашга қобиляти, оила аъзоларини
                розилиги, оиладаги молиявий ҳолатни ўрганиши ва тахлил қилиши. -
                Тўловлар харидор томонидан кечиктирилган такдирда, «Сотувчи»
                томонидан телефон алоқа, почта алоқа тизимлари орқали «Харидор»
                ва «Кафил»ларнинг иш жойи ёки яшаш манзилига бориб огохлантириши
                мумкин. -«Харидор»дан сотиб олинган махсулот(лар) тўловини ўз
                вақтида тўланишини талаб қилиб бориш; -икки ёки ундан ортик
                маротаба тўловларни амалга оширмаган такдирда, иш жойи
                раҳбариятига карздорликни ундириш юзасидан амалий ёрдам бериш
                ҳақида ёзма мурожаат килиш. -«Харидор» тўловларни икки ёки ундан
                ортиқ маротаба кечиктирган тақдирда, сотиб олинган
                махсулот(лар)ни мазкур шартноманинг 2.4-бандига асосан кайтариб
                олиш чораларини кўради ва махсулот(лар) учун тўланган тўловларни
                ижара тўлови (эскириш қиймати) хисобига қабул килиш; -«Харидор»
                сотиб олинган махсулот(лар) учун тўловларни тўлаш муддатидан
                кечиктирган такдирда, кечиктирилган хар бир кун учун тўланмаган
                карздорлик суммасига нисбатан 0,4% пеня хисоблаш, бироқ бунда
                пенянинг умумий суммаси тўланмаган карздорлик сумманинг 50%
                микдоридан оширмаслик; -«Харидор» томонидан шартнома ва иловада
                белгиланган тўлов кунидан 60 кундан ортик муддатда тўлов амалга
                оширилмаган ёки шартноманинг бошка шартлари бузилган такдирда
                қарздорликни муддатидан аввал ундириш юзасидан суд органларига
                мурожаат килиш;
              </Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.titlelar}>
                4.2. «Сотувчи»нинг мажбуриятлари:
              </Text>
            </View>
            <View style={{ marginTop: 2 }}>
              <Text style={styles.textlar}>
                -шартнома тузилгандан сўнг 3 кун ичида «Харидор» га
                махсулот(лар)ни тўлиқ ва бут холатда (кафолат таллони
                тўлдирилган холда) хужжатлари билан топшириш; -сотиб олинган
                махсулот(лар) учун ҳисоб-фактура такдим этиш; -носоз. Сифатсиз
                махсулот(лар)ни («Харидор»нинг айби билан юзага келган
                носозликлар бундан мустасно) 3 кун ичида алмаштириб бериш;
              </Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.titlelar}>
                4.3. «Харидор» нинг хуқуқлари;
              </Text>
            </View>
            <View style={{ marginTop: 2 }}>
              <Text style={styles.textlar}>
                -агарда сотиб олинган махсулот(лар) носоз ва сифатсиз бўлган
                тақдирда 3 кун ичида қайтариб бериш ва бошқасига алмаштириш;
                -махсулот(лар) нинг сертификати, кафолат таллони ва тўлов
                жадвалини талаб қилиб олиш; -махсулот(лар) кабул килинганидан
                сўнг. Кафолат муддати давомида вужудга келган носозликлар
                («Харидор»нинг айби билан юзага келган носозликлар бундан
                мустасно) юзасидан ушбу кафолат таллонида кўрсатилган ишлаб
                чиқарувчининг сервис хизматларига мурожаат килиш;
              </Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.titlelar}>
                4.4. «Харидор»нинг мажбуриятлари:
              </Text>
            </View>
            <View style={{ marginTop: 2 }}>
              <Text style={styles.textlar}>
                -шартнома тузилгандан сўнг, сотиб олинаётган махсулот(лар) учун
                олдиндан тўлов қилиш ; -«Сотувчи»дан махсулот(лар)ни тўлиқ ва
                бутлигини текшириш хамда 3 кун ичида қабул қилиб олиш; -сотиб
                олинган махсулот(лар) учун тўловларни ўз вақтида амалга ошириш;
                -тўловлар тўлиқ тўланмагунига қадар мазкур шартноманинг
                1.1-бандида кўрсатилган махсулот(лар)ни белгиланган тартибда
                сақлаш, бутлигини таъминлаш ҳамда қатъиян бошқа шахсларга
                сотмаслик, ўзаро келишувларни умуман амалга оширмаслик; -иш
                жойи, яшаш манзили ва бошқа маълумотлари ўзгарган такдирда, 5
                кун муддат ичида «Сотувчи»га хабар бериш;
              </Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.titlelar}>5.ТОМОНЛАРНИНГ ЖАВОБГАРЛИГИ.</Text>
            </View>
            <View style={{ marginTop: 2 }}>
              <Text style={styles.textlar}>
                5.1. Томонлар ушбу шартнома шартларини бажармаганда ва
                белгиланган шартларга риоя қилмаганда амалдаги қонунчилик олдида
                жавобгардирлар. 5.2. Ушбу шартнома шартларини бажармаслиги
                оқибитида юзага келган низоли вазиятлар Ўзбекистон
                Республикасининг амалдаги қонун хужжатларига амал килган холда
                музокаралар йўли билан хал қиладилар. Томонларнинг келишувига
                эришилмаган тақдирда низолар суд органлари томонидан хал
                қилинади.
              </Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.titlelar}>
                6.ШАРТНОМАНИ ЎЗГАРТИРИШ ВА БЕКОР КИЛИШ ТАРТИБИ.
              </Text>
            </View>
            <View style={{ marginTop: 2 }}>
              <Text style={styles.textlar}>
                6.1. Ушбу шартномага хар қандай ўзгартириш ва қўшимчалар улар
                ёзма равишда расмийлаштирилган ва тарафларнинг ваколатли
                шахслари томонидан имзоланган тақдирда хақиқий хисобланади. 6.2.
                Шартнома муддатидан олдин бекор қилишга тарафларнинг келишувига
                мувофиқ ёки Ўзбекистон Республикасининг амалдаги қонун
                хужжатларида назарда тутилган асосларга кўра, етказилган зарар
                қопланган холда йўл қўйилади.
              </Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.titlelar}>7. БОШҚА ШАРТЛАР.</Text>
            </View>
            <View style={{ marginTop: 2 }}>
              <Text style={styles.textlar}>
                7.1. «Харидор» томонидан махсулот(лар)ни қайтарилган тақдирда, 3
                кун муддат ичида таққослаш далолатномаси асосида хисоб-китоб
                қилинади ва 30 кун давомида қарздорлик бартараф этилмаса, ушбу
                махсулот(лар) хисобидан натура шаклида қарздорлик қопланади.
                7.2. Ушбу шартнома «Харидор» томонидан махсулот(лар) тўлиқ қабул
                қилиб олинган вақтдан бошлаб кучга киради ва ушбу шартнома
                бўйича мажбуриятлар тўлиқ бажарилгунга кадар амал килади. 7.3.
                Ушбу шартнома ҳар қайси томон учун бир хил юридик кучга эга
                бўлган 2 нусхада тузилди.
              </Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.titlelar}>8. ТОМОНЛАРНИНГ МАНЗИЛЛАРИ.</Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ marginTop: 19, width: "50%" }}>
                <Text
                  style={{
                    display: "block",
                    flexDirection: "column",
                    alignItems: "center",
                    fontFamily: "Roboto",
                    fontSize: 10,
                  }}
                >
                  «СОТУВЧИ»{"\n"}
                  ЯТТ МУХОЖИРОВ МУХСИНХЎЖА{"\n"}
                  Манзил: Риштон шахар Рошидоний кучаси{"\n"}
                  ЯТТ Мухожиров Мухсинхўжа{"\n"}
                  20218000005384518001{"\n"}
                  Телефон: +998 97 036 10 10{"\n"}
                  +998 91 97 037 10 10{"\n"}
                  Клик рақами : 8600053219297666{"\n"}
                  Рахбар: М.Мухожиров ___________________{"\n"}
                </Text>
                <Text
                  style={{
                    display: "block",
                    flexDirection: "column",
                    alignItems: "center",
                    fontFamily: "Roboto",
                    fontSize: 10,
                  }}
                >
                  (имзо) ____________
                </Text>
              </View>
              <View style={{ marginTop: 19, width: "50%" }}>
                <Text
                  style={{
                    display: "block",
                    flexDirection: "column",
                    alignItems: "center",
                    fontFamily: "Roboto",
                    fontSize: 10,
                  }}
                >
                  «ХАРИДОР »{"\n"}
                  {shaxs.username} {shaxs.surname}
                  {"\n"}
                  Манзил: {shaxs.address}
                  {"\n"}
                  Паспорт:{shaxs.pasSerNum}
                  {"\n"}
                  Иш жойи: {shaxs.workplace}
                  {"\n"}
                  Тел 1:{shaxs.phone}
                  {"\n"}
                  Тел 2:{shaxs.phone2}
                  {"\n"}
                  Фуқаро: {shaxs.guarantor} {"\n"}
                </Text>
                <Text
                  style={{
                    display: "block",
                    flexDirection: "column",
                    alignItems: "center",
                    fontFamily: "Roboto",
                    fontSize: 10,
                  }}
                >
                  (имзо) ____________
                </Text>
              </View>
            </View>

            <View
              style={{
                marginTop: 60,
                flex: 0,
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontFamily: "Roboto", fontSize: 11 }}>
                ТЎЛОВ ЖАДВАЛИ
              </Text>
              <Text style={{ fontFamily: "Roboto", fontSize: 11 }}>
                Шартнома № {foo.nomer} га илова
              </Text>
            </View>
            <View
              style={{
                display: "table",
                width: "auto",
                height: "auto",
                borderStyle: "solid",
                borderWidth: 1,
                borderRightWidth: 0,
                borderBottomWidth: 0,
                marginTop: 27,
              }}
            >
              <View style={styles.tableRow}>
                <View
                  style={{
                    width: "34%",
                    fontFamily: "Roboto",
                    borderStyle: "solid",
                    height: "auto",
                    borderWidth: 1,
                    borderLeftWidth: 0,
                    borderTopWidth: 0,
                  }}
                >
                  <Text style={styles.tableCell}>Махсулот(лар) нархи</Text>
                </View>
                <View
                  style={{
                    width: "33% ",
                    fontFamily: "Roboto",
                    borderStyle: "solid",
                    height: "auto",
                    borderWidth: 1,
                    borderLeftWidth: 0,
                    borderTopWidth: 0,
                  }}
                >
                  <Text style={styles.tableCell}>Олдиндан тўлов сўммаси</Text>
                </View>
                <View
                  style={{
                    width: "33%",
                    fontFamily: "Roboto",
                    borderStyle: "solid",
                    height: "auto",
                    borderWidth: 1,
                    borderLeftWidth: 0,
                    borderTopWidth: 0,
                  }}
                >
                  <Text style={styles.tableCell}>Қарздорлик сўммаси</Text>
                </View>
              </View>

              {data.items.map((item, ind) => (
                <View key={ind} style={styles.tableRow}>
                  <View
                    style={{
                      width: "34%",
                      fontFamily: "Roboto",
                      borderStyle: "solid",
                      height: "auto",
                      borderWidth: 1,
                      borderLeftWidth: 0,
                      borderTopWidth: 0,
                    }}
                  >
                    <Text style={styles.tableCell}>{data.total}</Text>
                  </View>
                  <View
                    style={{
                      width: "33%",
                      fontFamily: "Roboto",
                      borderStyle: "solid",
                      height: "auto",
                      borderWidth: 1,
                      borderLeftWidth: 0,
                      borderTopWidth: 0,
                    }}
                  >
                    <Text style={styles.tableCell}> Oldindan tulov </Text>
                  </View>
                  <View
                    style={{
                      width: "33%",
                      fontFamily: "Roboto",
                      borderStyle: "solid",
                      height: "auto",
                      borderWidth: 1,
                      borderLeftWidth: 0,
                      borderTopWidth: 0,
                    }}
                  >
                    <Text style={styles.tableCell}> Qarzdorlik </Text>
                  </View>
                </View>
              ))}
            </View>
            <View
              style={{
                display: "table",
                width: "auto",
                height: "auto",
                borderStyle: "solid",
                borderWidth: 1,
                borderRightWidth: 0,
                borderBottomWidth: 0,
                marginTop: 15,
              }}
            >
              <View style={styles.tableRow}>
                <View style={styles.tableTr}>
                  <Text style={styles.tableCell}>Т\р</Text>
                </View>
                <View style={styles.tableItem}>
                  <Text style={styles.tableCell}>Тўлов санаси</Text>
                </View>
                <View style={styles.tableItem}>
                  <Text style={styles.tableCell}>Олдиндан тўлов суммаси</Text>
                </View>
                <View style={styles.tableItem}>
                  <Text style={styles.tableCell}>Қарздорлик сўммаси</Text>
                </View>
              </View>

              {data.payments.map((item, ind) => (
                <View key={ind} style={styles.tableRow}>
                  <View style={styles.tableTr}>
                    <Text style={styles.tableCell}>{ind + 1}</Text>
                  </View>
                  <View style={styles.tableItem}>
                    <Text style={styles.tableCell}>
                      {item.startDate.slice(0, 10)}
                    </Text>
                  </View>
                  <View style={styles.tableItem}>
                    <Text style={styles.tableCell}>Oldindan tulov summasi</Text>
                  </View>
                  <View style={styles.tableItem}>
                    <Text style={styles.tableCell}>{item.paymentAmount}</Text>
                  </View>
                </View>
              ))}
            </View>

            <View style={{ marginTop: 17 }}>
              <Text
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontFamily: "Roboto",
                  fontSize: 13,
                  textAlign: "center",
                }}
              >
                ЮК ХАТИ \ ХИСОБВАРАҚ-ФАКТУРА № {foo.yuknomer}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  display: "block",
                  flexDirection: "column",
                  alignItems: "center",
                  fontFamily: "Roboto",
                  fontSize: 11,
                }}
              >
                {foo.sana} йилдаги № {foo.nomer} -сонли муддатли тулов шарти
                билан тузилган олди-сотди шартномасига асосан
              </Text>
            </View>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <View
                  style={{
                    width: "50%",
                    fontFamily: "Roboto",
                    borderStyle: "solid",
                    height: "auto",
                    borderWidth: 1,
                    borderLeftWidth: 0,
                    borderTopWidth: 0,
                  }}
                >
                  <Text style={{ height: "auto", margin: 5, fontSize: 10 }}>
                    “СОТУВЧИ”
                  </Text>
                </View>
                <View
                  style={{
                    width: "50%",
                    fontFamily: "Roboto",
                    borderStyle: "solid",
                    height: "auto",
                    borderWidth: 1,
                    borderLeftWidth: 0,
                    borderTopWidth: 0,
                  }}
                >
                  <Text style={{ height: "auto", margin: 5, fontSize: 10 }}>
                    “ХАРИДОР”
                  </Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View
                  style={{
                    width: "50%",
                    fontFamily: "Roboto",
                    borderStyle: "solid",
                    height: "auto",
                    borderWidth: 1,
                    borderLeftWidth: 0,
                    borderTopWidth: 0,
                  }}
                >
                  <Text style={{ height: "auto", margin: 5, fontSize: 10 }}>
                    ЯТТ Мухожиров Мухсинхўжа {"\n"}
                    Манзил : Риштон шахар Рошидоний кучаси{"\n"}
                    Х/р: 20218000005384518001{"\n"}
                    МФО: 00520{"\n"}
                    Банк : {"\n"}
                    Телефон: +998 97 036 10 10 {"\n"} +998 91 97 037 10 10
                  </Text>
                </View>
                <View
                  style={{
                    width: "50%",
                    fontFamily: "Roboto",
                    borderStyle: "solid",
                    height: "auto",
                    borderWidth: 1,
                    borderLeftWidth: 0,
                    borderTopWidth: 0,
                  }}
                >
                  <Text style={{ height: "auto", margin: 5, fontSize: 10 }}>
                    {shaxs.username} {shaxs.surname} {"\n"}
                    Манзил : {shaxs.address} {"\n"}
                    Хужжат : {shaxs.pasSerNum} {"\n"}
                    Телефон: {shaxs.phone} {"\n"}
                    Телефон2: {shaxs.phone2}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                display: "table",
                width: "auto",
                height: "auto",
                borderStyle: "solid",
                borderWidth: 1,
                borderRightWidth: 0,
                borderBottomWidth: 0,
                marginTop: 47,
              }}
            >
              <View style={styles.tableRow}>
                <View style={styles.jadval}>
                  <Text style={styles.tableCell}>T\p</Text>
                </View>
                <View
                  style={{
                    width: "41%",
                    fontFamily: "Roboto",
                    borderStyle: "solid",
                    height: "auto",
                    borderWidth: 1,
                    borderLeftWidth: 0,
                    borderTopWidth: 0,
                  }}
                >
                  <Text style={styles.tableCell}>Махсулот номи</Text>
                </View>
                <View
                  style={{
                    width: "10%",
                    fontFamily: "Roboto",
                    borderStyle: "solid",
                    height: "auto",
                    borderWidth: 1,
                    borderLeftWidth: 0,
                    borderTopWidth: 0,
                  }}
                >
                  <Text style={styles.tableCell}>Сони</Text>
                </View>
                <View
                  style={{
                    width: "22%",
                    fontFamily: "Roboto",
                    borderStyle: "solid",
                    height: "auto",
                    borderWidth: 1,
                    borderLeftWidth: 0,
                    borderTopWidth: 0,
                  }}
                >
                  <Text style={styles.tableCell}>Махсулот нархи</Text>
                </View>

                <View
                  style={{
                    width: "22%",
                    fontFamily: "Roboto",
                    borderStyle: "solid",
                    height: "auto",
                    borderWidth: 1,
                    borderLeftWidth: 0,
                    borderTopWidth: 0,
                  }}
                >
                  <Text style={styles.tableCell}>Умумий киймати</Text>
                </View>
              </View>

              {data.items.map((item, ind) => (
                <View key={ind} style={styles.tableRow}>
                  <View style={styles.jadval}>
                    <Text style={styles.tableCell}>{ind + 1}</Text>
                  </View>
                  <View
                    style={{
                      width: "41%",
                      fontFamily: "Roboto",
                      borderStyle: "solid",
                      height: "auto",
                      borderWidth: 1,
                      borderLeftWidth: 0,
                      borderTopWidth: 0,
                    }}
                  >
                    <Text style={styles.tableCell}>{item.title}</Text>
                  </View>
                  <View
                    style={{
                      width: "10%",
                      fontFamily: "Roboto",
                      borderStyle: "solid",
                      height: "auto",
                      borderWidth: 1,
                      borderLeftWidth: 0,
                      borderTopWidth: 0,
                    }}
                  >
                    <Text style={styles.tableCell}> {item.quantity} </Text>
                  </View>
                  <View
                    style={{
                      width: "22%",
                      fontFamily: "Roboto",
                      borderStyle: "solid",
                      height: "auto",
                      borderWidth: 1,
                      borderLeftWidth: 0,
                      borderTopWidth: 0,
                    }}
                  >
                    <Text style={styles.tableCell}> {item.price} </Text>
                  </View>

                  <View
                    style={{
                      width: "22%",
                      fontFamily: "Roboto",
                      borderStyle: "solid",
                      height: "auto",
                      borderWidth: 1,
                      borderLeftWidth: 0,
                      borderTopWidth: 0,
                    }}
                  >
                    <Text style={styles.tableCell}> {data.total} </Text>
                  </View>
                </View>
              ))}
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontSize: 10 }}>
                ( ___________________________________ )
              </Text>
            </View>
            <View
              style={{
                marginTop: 30,
                flex: 0,
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontFamily: "Roboto", fontSize: 10 }}>
                Топширдим
              </Text>
              <Text style={{ fontFamily: "Roboto", fontSize: 10 }}>Олдим</Text>
            </View>
            <View
              style={{
                marginTop: 20,
                flex: 0,
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontFamily: "Roboto", fontSize: 10 }}>
                Рахбар ___________ Мухожиров Мухсинхўжа{" "}
              </Text>
              <Text style={{ fontFamily: "Roboto", fontSize: 10 }}>
                {" "}
                ___________{" "}
              </Text>
            </View>

            <View
              style={{
                marginTop: 30,
                flex: 0,
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontFamily: "Roboto", fontSize: 10 }}>
                Ишончнома бўйича
              </Text>
              <Text style={{ fontFamily: "Roboto", fontSize: 10 }}> </Text>
            </View>
            <View
              style={{
                marginTop: 20,
                flex: 0,
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontFamily: "Roboto", fontSize: 10 }}>
                Махсулотни бериб юбордим ________________________
              </Text>
              <Text style={{ fontFamily: "Roboto", fontSize: 10 }}> </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default YukXati;

const styles = StyleSheet.create({
  myText: {
    fontFamily: "Roboto",
    textAlign: "center",
  },

  page: {
    flexDirection: "row",
    height: "auto",
    width: "100%",
  },
  table: {
    display: "table",
    width: "auto",
    height: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    marginTop: 20,
  },
  tableRow: { margin: "auto", height: "auto", flexDirection: "row" },
  tableCol: {
    width: "19%",
    fontFamily: "Roboto",
    borderStyle: "solid",
    height: "auto",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: { margin: "auto", height: "auto", marginTop: 5, fontSize: 10 },
  textlar: {
    display: "block",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Roboto",
    fontSize: 8,
  },
  titlelar: {
    display: "block",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Roboto",
    fontSize: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  tableItem: {
    width: "31%",
    fontFamily: "Roboto",
    borderStyle: "solid",
    height: "auto",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableTr: {
    width: "7%",
    fontFamily: "Roboto",
    borderStyle: "solid",
    height: "auto",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  jadval: {
    width: "5%",
    borderStyle: "solid",
    height: "auto",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
});
