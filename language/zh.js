const language = {
  info: {
    country_code: "TW",
    lang_name: "正體中文"
  },
  site: {
    description: "奶茶伺服器封禁列表"
  },
  words: {
    bans: {
      singular: "封禁",
      plural: "封禁紀錄"
    },
    mutes: {
      singular: "靜音",
      plural: "靜音紀錄"
    },
    kicks: {
      singular: "踢出",
      plural: "踢出紀錄"
    },
    warns: {
      singular: "警告",
      plural: "警告紀錄"
    },
    yes: "是",
    no: "否",
    player: "玩家",
    staff: "管理員",
    reason: "原因",
    date: "日期",
    expires: "到期日",
    originServer: "原始伺服器",
    notified: "已通知",
  },
  pages: {
    home: {
      title: "首頁",
      // Placeholders: {total}, {bans}, {mutes}, {kicks}, {warns}
      subtitle: "奶茶伺服器封禁列表"
    },
    history: {
      title: "歷史紀錄",
      // Placeholders: {total}
      subtitle: "總懲罰數量： {total}",
      table: {
        heads: {
          type: "類型",
          player: "玩家",
          by: "懲罰者",
          reason: "原因",
          date: "日期",
          expires: "到期日"
        },
        permanent: "永久懲罰",
        expire_not_applicable: "N/A",
        active: {
          true: "有效",
          temporal: "臨時",
          false: "已過期"
        }
      }
    },
    bans: {
      title: "封禁",
      // Placeholders: {total}
      subtitle: "封禁數量： {total}",
      table: {
        heads: {
          player: "玩家",
          by: "封禁者",
          reason: "原因",
          date: "日期",
          expires: "到期日"
        },
        permanent: "永久封禁",
        active: {
          true: "有效",
          temporal: "臨時",
          false: "已過期"
        }
      },
      info: {
        title: "封禁 #{id}",
        badges: {
          ipban: "封禁 IP",
          active: "有效",
          expired: "已過期",
          permanent: "永久封禁",
        }
      }
    },
    mutes: {
      title: "靜音",
      // Placeholders: {total}
      subtitle: "靜音數量： {total}",
      table: {
        heads: {
          player: "玩家",
          by: "靜音者",
          reason: "原因",
          date: "日期",
          expires: "到期日"
        },
        permanent: "永久靜音",
        active: {
          true: "有效",
          temporal: "臨時",
          false: "已過期"
        }
      },
      info: {
        title: "靜音 #{id}",
        badges: {
          ipmute: "IP 靜音",
          active: "有效",
          expired: "已過期",
          permanent: "永久封禁",
        }
      }
    },
    warns: {
      title: "警告",
      // Placeholders: {total}
      subtitle: "警告數量： {total}",
      table: {
        heads: {
          player: "玩家",
          by: "警告者",
          reason: "原因",
          date: "日期",
          notified: "已通知"
        },
      },
      info: {
        title: "警告 #{id}"
      }
    },
    kicks: {
      title: "踢出",
      // Placeholders: {total}
      subtitle: "踢出數量： {total}",
      table: {
        heads: {
          player: "玩家",
          by: "踢出者",
          reason: "原因",
          date: "日期"
        }
      },
      info: {
        title: "踢出 #{id}"
      }
    },
    playerHistory: {
      // Placeholders: {player}
      title: "{player}"
    },
    errors: {
      notFound: {
        title: "404",
        description: "看起來你到了不存在的頁面，請返回主畫面",
        button: "回到主畫面"
      }
    }
  },
  pagination: {
    previous: "上一頁",
    next: "下一頁"
  },
  notifications: {
    playerNotFound: {
      title: "發生錯誤",
      description: "資料庫中找不到這個玩家，請確認玩家名稱是否正確。",
    }
  }
}

module.exports = language;