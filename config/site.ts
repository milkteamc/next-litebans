export const siteConfig = {
  title: "奶茶伺服器封禁列表",
  logo: "/milktea.webp",
  favicon: "/milktea.webp",
  languages: {
    available: [
      "zh",
    ],
    default: "zh",
  },
  console: {
    name: "控制臺", // Just for filter badge
    uuid: "[Console]", // Use for filter url and to check if a punishment is made from the Console. In some versions of Litebans, the console uuid is "CONSOLE".
    icon: "/console.webp",
    body: "/console-body.webp",
    bust: "/console-bust.webp",
  },
  defaultPlayerLookup: "Milk_bubble2",
  // When enabled, body and bust images will show a steve skin
  bedrock: {
    enabled: true,
    prefix: ".",
  },
  openGraph: {
    dateFormat: "yyyy-MM-dd hh:mm:ss",
    pages: {
      main: {
        // Placeholders: {total}, {bans}, {mutes}, {kicks}, {warns}
        description: `
        奶茶伺服器封禁列表

        總懲罰數量： {total}

          🚫 封禁： {bans}
          🔇 靜音： {mutes}
          ⚠️ 警告： {warns}
          ❌ 踢出： {kicks}
        `
      },
      history: {
        // Placeholders: {total}, {bans}, {mutes}, {kicks}, {warns}
        description: `
        總懲罰數量： {total}

          🚫 封禁： {bans}
          🔇 靜音： {mutes}
          ⚠️ 警告： {warns}
          ❌ 踢出： {kicks}
        `
      },
      player: {
        // Placeholders: {name}, {total}, {bans}, {mutes}, {kicks}, {warns}
        description: `
        {name} 的懲罰

        總懲罰數量： {total}

          🚫 封禁： {bans}
          🔇 靜音： {mutes}
          ⚠️ 警告： {warns}
          ❌ 踢出： {kicks}
        `,
        bans: {
          description: `
          {name} 的封禁紀錄

          總封禁數量： {total}
          `,
        },
        mutes: {
          description: `
          {name} 的靜音紀錄

          總靜音數量： {total}
          `,
        },
        warns: {
          description: `
          {name} 的警告紀錄

          總警告數量： {total}
          `,
        },
        kicks: {
          description: `
          {name} 的踢出紀錄

          總踢出數量： {total}
          `,
        },
      },
      bans: {
        // Placeholders: {total}
        description: "總封禁數量： {total}"
      },
      mutes: {
        // Placeholders: {total}
        description: "總靜音數量： {total}"
      },
      warns: {
        // Placeholders: {total}
        description: "總警告數量： {total}"
      },
      kicks: {
        // Placeholders: {total}
        description: "總踢出數量： {total}"
      },
    },
    punishments: {
      ban: {
        // Placeholders: {name}, {staff}, {reason}, {time}, {duration}, {server}
        description: `
        👤 用戶： {name}
        👮 管理員： {staff}

        📜 原因： {reason}
        🕒 時間： {time}
        ⌛ 持續時間： {duration}
        `
      },
      mute: {
        // Placeholders: {name}, {staff}, {reason}, {time}, {duration}, {server}
        description: `
        👤 用戶： {name}
        👮 管理員： {staff}

        📜 原因： {reason}
        🕒 時間： {time}
        ⌛ 持續時間： {duration}
        `
      },
      warn: {
        // Placeholders: {name}, {staff}, {reason}, {time}, {server}
        description: `
        👤 用戶： {name}
        👮 管理員： {staff}

        📜 原因： {reason}
        🕒 時間： {time}
        `
      },
      kick: {
        // Placeholders: {name}, {staff}, {reason}, {time}, {server}
        description: `
        👤 用戶： {name}
        👮 管理員： {staff}

        📜 原因： {reason}
        🕒 時間： {time}
        `
      }
    }
  }
}
export type SiteConfig = typeof siteConfig;
