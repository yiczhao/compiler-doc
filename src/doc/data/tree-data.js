/**
 * @description 树形组件的测试数据.
 * @author pkeros
 * @data 2017/3/29
 * @email pkeros@vip.qq.com
 */

// 公司模拟数据
export const company = {
  "id": 1,
  "channelName": "卡说总部",
  "address": "address",
  "contactName": "contactName",
  "mobilePhone": "mobilePhone",
  "email": "email",
  "status": 1,
  "pid": 0,
  "total": 12,
  "nodes": [
    {
      "id": 2,
      "channelName": "华中大区",
      "address": "address",
      "contactName": "contactName",
      "mobilePhone": "mobilePhone",
      "email": "email",
      "status": 1,
      "pid": 1,
      "nodes": [
        {
          "id": 4,
          "channelName": "上海卡说一部",
          "address": "address",
          "contactName": "contactName",
          "mobilePhone": "mobilePhone",
          "email": "email",
          "status": 1,
          "pid": 2,
          "nodes": []
        },
        {
          "id": 5,
          "channelName": "上海卡说二部",
          "address": "address",
          "contactName": "contactName",
          "mobilePhone": "mobilePhone",
          "email": "email",
          "status": 1,
          "pid": 2,
          "nodes": []
        },
        {
          "id": 6,
          "channelName": "上海卡说三部",
          "address": "address",
          "contactName": "contactName",
          "mobilePhone": "mobilePhone",
          "email": "email",
          "status": 1,
          "pid": 2,
          "nodes": [
            {
              "id": 10,
              "channelName": "闵行卡说一部",
              "address": "address",
              "contactName": "contactName",
              "mobilePhone": "mobilePhone",
              "email": "email",
              "status": 1,
              "pid": 6,
              "nodes": []
            }
          ]
        }
      ]
    },
    {
      "id": 3,
      "channelName": "华南大区",
      "address": "address",
      "contactName": "contactName",
      "mobilePhone": "mobilePhone",
      "email": "email",
      "status": 1,
      "pid": 1,
      "nodes": [
        {
          "id": 7,
          "channelName": "无锡卡说一部",
          "address": "address",
          "contactName": "contactName",
          "mobilePhone": "mobilePhone",
          "email": "email",
          "status": 1,
          "pid": 3,
          "nodes": [
            {
              "id": 11,
              "channelName": "苏州卡说一部",
              "address": "address",
              "contactName": "contactName",
              "mobilePhone": "mobilePhone",
              "email": "email",
              "status": 1,
              "pid": 7,
              "nodes": [
                {
                  "id": 20,
                  "channelName": "闵行卡说一部",
                  "address": "address",
                  "contactName": "contactName",
                  "mobilePhone": "mobilePhone",
                  "email": "email",
                  "status": 1,
                  "pid": 11,
                  "nodes": []
                }
              ]
            }
          ]
        },
        {
          "id": 8,
          "channelName": "XX卡说一部",
          "address": "address",
          "contactName": "contactName",
          "mobilePhone": "mobilePhone",
          "email": "email",
          "status": 1,
          "pid": 3,
          "nodes": []
        },
        {
          "id": 9,
          "channelName": "ASF卡说一部",
          "address": "address",
          "contactName": "contactName",
          "mobilePhone": "mobilePhone",
          "email": "email",
          "status": 1,
          "pid": 3,
          "nodes": []
        }
      ]
    }
  ]
};
