// index.js

import agconnect from "@hw-agconnect/api";
import "@hw-agconnect/instance";
import "@hw-agconnect/database";
// import agConnectConfig from"../../../TODO/config/app-schema";

Page({

  data: {
    content: '',
    list: []
  },

  onLoad(option) {
    //初始化agc
    var agConnectConfig =
    {
      "agcgw": {
        "backurl": "connect-drcn.hispace.hicloud.com",
        "url": "connect-drcn.dbankcloud.cn",
        "websocketbackurl": "connect-ws-drcn.hispace.dbankcloud.com",
        "websocketurl": "connect-ws-drcn.hispace.dbankcloud.cn"
      },
      "agcgw_all": {
        "CN": "connect-drcn.dbankcloud.cn",
        "CN_back": "connect-drcn.hispace.hicloud.com",
        "DE": "connect-dre.dbankcloud.cn",
        "DE_back": "connect-dre.hispace.hicloud.com",
        "RU": "connect-drru.hispace.dbankcloud.ru",
        "RU_back": "connect-drru.hispace.dbankcloud.cn",
        "SG": "connect-dra.dbankcloud.cn",
        "SG_back": "connect-dra.hispace.hicloud.com"
      },
      "websocketgw_all": {
        "CN": "connect-ws-drcn.hispace.dbankcloud.cn",
        "CN_back": "connect-ws-drcn.hispace.dbankcloud.com",
        "DE": "connect-ws-dre.hispace.dbankcloud.cn",
        "DE_back": "connect-ws-dre.hispace.dbankcloud.com",
        "RU": "connect-ws-drru.hispace.dbankcloud.ru",
        "RU_back": "connect-ws-drru.hispace.dbankcloud.cn",
        "SG": "connect-ws-dra.hispace.dbankcloud.cn",
        "SG_back": "connect-ws-dra.hispace.dbankcloud.com"
      },
      "client": {
        "cp_id": "370086000102546206",
        "product_id": "388421841222287748",
        "client_id": "1458905105318321024",
        "client_secret": "[!005E60AABC6525A7DCC6E054F7F333F456700D2EE7A12A22ABA5B4A43E3D21F07D8474D578998B0552B937F4D73EDCCACE51AB554AE0375AB4A80C5C9ACA63174583B01134D71C9E5D0304CFEC3BDBA3C987322D43D784316343D274764BCAFCBB]",
        "project_id": "388421841222287748",
        "app_id": "111434523",
        "api_key": "[!00814832CCFA105B3CBE3A0080911CE89A98255FD6CDD37176B21C1538DD4CDF43EE19A177158237630C2C93F627DF4DF225FBC0699418D4EE83C36FF37223A498D4900759F5DC638FB2889BB433FB08AF9E804052BE40B6F6A6DE9C006DCCAFDAE70280C2B9FEB6FC748428B347E15C35DE0784A27E680E969D3F58D0DEA3A535]",
        "package_name": "com.todo.lukky"
      },
      "oauth_client": {
        "client_id": "111434523",
        "client_type": 30
      },
      "app_info": {
        "app_id": "5765880207854820123",
        "package_name": "com.todo.lukky"
      },
      "code": {
        "code1": "2DEB587D5ADDCCEE2F7EEC0A68B77A37",
        "code2": "9B1C1622045DF4A15CC16F56578A9D99",
        "code3": "EC97586E260902307DADDD777EFC7C86",
        "code4": "D603D93C6E3135789EA15F0A09F5138B"
      },
      "service": {
        "analytics": {
          "collector_url": "datacollector-drcn.dt.hicloud.com,datacollector-drcn.dt.dbankcloud.cn",
          "collector_url_ru": "datacollector-drru.dt.dbankcloud.ru,datacollector-drru.dt.hicloud.com",
          "collector_url_sg": "datacollector-dra.dt.hicloud.com,datacollector-dra.dt.dbankcloud.cn",
          "collector_url_de": "datacollector-dre.dt.hicloud.com,datacollector-dre.dt.dbankcloud.cn",
          "collector_url_cn": "datacollector-drcn.dt.hicloud.com,datacollector-drcn.dt.dbankcloud.cn",
          "resource_id": "p1",
          "channel_id": ""
        },
        "edukit": {
          "edu_url": "edukit.cloud.huawei.com.cn",
          "dh_url": "edukit.cloud.huawei.com.cn"
        },
        "search": {
          "url": "https://search-drcn.cloud.huawei.com"
        },
        "cloudstorage": {
          "storage_url_sg_back": "https://agc-storage-dra.cloud.huawei.asia",
          "storage_url_ru_back": "https://agc-storage-drru.cloud.huawei.ru",
          "storage_url_ru": "https://agc-storage-drru.cloud.huawei.ru",
          "storage_url_de_back": "https://agc-storage-dre.cloud.huawei.eu",
          "storage_url_de": "https://ops-dre.agcstorage.link",
          "storage_url": "https://agc-storage-drcn.platform.dbankcloud.cn",
          "storage_url_sg": "https://ops-dra.agcstorage.link",
          "storage_url_cn_back": "https://agc-storage-drcn.cloud.huawei.com.cn",
          "storage_url_cn": "https://agc-storage-drcn.platform.dbankcloud.cn"
        },
        "ml": {
          "mlservice_url": "ml-api-drcn.ai.dbankcloud.com,ml-api-drcn.ai.dbankcloud.cn"
        }
      },
      "region": "CN",
      "configuration_version": "3.0",
      "appInfos": [
        {
          "package_name": "com.todo.lukky",
          "client": {
            "client_secret": "[!00049914674F682527822A9BA4544225EEF5432A12E403E8D48DBA181A1399C46BDD2026C6041313CED34DECD189A8A13BE83A889588D9D8BE9AE336387D9F618ECC635DA9A4082969A0A38FEAD3541250392C9F6DDABC9C35FB86E8D47595A3EA]",
            "app_id": "5765880207854820123",
            "api_key": "[!00BDD4D210B45A823B3209D8BC68A3765015D0004DE31518942C80E69B50C9CAD90CF9A8FBD2ADF192BCC7B116ADEF201DFC2CF451D6C1EBD8C8FFC10D9DFA64F504EEB142ABD4666F032652543A09ABADC53574F9AF56826C697BF600B929D8803FDC30679A855619EC56B02F3EC117C8AEBCEECF540845F7E2BAFBB2BE0A8810]"
          },
          "code": {
            "code1": "F1F23074E0B1852466A327D9A1A0E15FB97461C2B75D03B0508BF9B282DDD400",
            "code2": "4F46DE737F0BED8E4E2CFF697BC354F6D431A7388CC253DD63D3B707FDE737BC",
            "code3": "FD48D47FF79468FB98073BDEF312774603D9AAC421042756E39E140B4B968E82",
            "code4": "286A8986DD0546F0C084CABC0A89A40A"
          }
        }
      ]
    }
    agconnect.instance().configInstance(agConnectConfig);
  },

  inputchange(e) {
    this.data.content = e.detail.value
  },
  addEvent(e) {
    console.log(this.data.content)
  }
})
