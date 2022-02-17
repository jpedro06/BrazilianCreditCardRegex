const regexVisa       = /^4(?!01178|01179|31274|38935|51416|57393|57631|57632)/
const regexMastercard = /^(2(22[1-9][0-9]{2}|2[3-9][0-9]{3}|[3-6][0-9]{4}|7[01][0-9]{3}|720[0-9]{2})|5(?!17914|07860|30032|32473|32474|30780|18967|30994|06699|067[0-9]{2}|09[0-9]{3}))/
const regexAmex       = /^(37|34)/
const regexJCB        = /^(3(?:088|096|112|158|337|5(?:2[89]|[3-8][0-9]))\d{12})$/
const regexDiners     = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/
const regexDiscover   = /^6(?:011|5[0-9]{2})[0-9]{12}$/
const regexElo        = /^(40117[8-9]|431274|438935|451416|457393|45763[1-2]|506(699|7[0-6][0-9]|77[0-8])|509\\d{3}|504175|627780|636297|636368|65003[1-3]|6500(3[5-9]|4[0-9]|5[0-1])|6504(0[5-9]|[1-3][0-9])|650(4[8-9][0-9]|5[0-2][0-9]|53[0-8])|6505(4[1-9]|[5-8][0-9]|9[0-8])|6507(0[0-9]|1[0-8])|65072[0-7]|6509(0[1-9]|1[0-9]|20)|6516(5[2-9]|[6-7][0-9])|6550([0-1][0-9]|2[1-9]|[3-4][0-9]|5[0-8]))/
const regexHipercard  = /^(3841|606282|609820|637095|637568)/
const regexAura       = /^(507860|530032|532473|532474)/

function getCardFlag(cardnumber) {
  if (regexElo.test(cardnumber)) {
    return "Elo";
  } else if (regexAura.test(cardnumber)) {
    return "Aura";
  } else if (regexJCB.test(cardnumber)) {
    return "JCB";
  } else if (regexDiscover.test(cardnumber)) {
    return "Discover";
  } else if (regexHipercard.test(cardnumber)) {
    return "Hipercard";
  } else if (regexAmex.test(cardnumber)) {
    return "Amex";
  } else if (regexDiners.test(cardnumber)) {
    return "Diners";
  } else if (regexVisa.test(cardnumber)) {
    return "Visa";
  } else if (regexMastercard.test(cardnumber)) {
    return "Mastercard";
  } else {
    return false;
  }
}