const language = {
  info: {
    country_code: "US",
    lang_name: "English"
  },
  site: {
    description: "A simple and lightweight Litebans web interface."
  },
  words: {
    bans: {
      singular: "Ban",
      plural: "Bans"
    },
    mutes: {
      singular: "Mute",
      plural: "Mutes"
    },
    kicks: {
      singular: "Kick",
      plural: "Kicks"
    },
    warns: {
      singular: "Warn",
      plural: "Warns"
    },
    yes: "Yes",
    no: "No",
    player: "Player",
    staff: "Staff",
    reason: "Reason",
    date: "Date",
    expires: "Expires",
    originServer: "Origin server",
    notified: "Notified",
  },
  pages: {
    home: {
      title: "Home",
      // Placeholders: {total}, {bans}, {mutes}, {kicks}, {warns}
      subtitle: "Welcome to Litebans Web Interface!"
    },
    history: {
      title: "History",
      // Placeholders: {total}
      subtitle: "Total punishments: {total}",
      table: {
        heads: {
          type: "Type",
          player: "Player",
          by: "Punished by",
          reason: "Reason",
          date: "Date",
          expires: "Expires"
        },
        permanent: "Permanent punishment",
        expire_not_applicable: "N/A",
        active: {
          true: "Active",
          temporal: "Temporal",
          false: "Expired"
        }
      }
    },
    bans: {
      title: "Bans",
      // Placeholders: {total}
      subtitle: "Ban count: {total}",
      table: {
        heads: {
          player: "Player",
          by: "Banned by",
          reason: "Reason",
          date: "Date",
          expires: "Expires"
        },
        permanent: "Permanent ban",
        active: {
          true: "Active",
          temporal: "Temporal",
          false: "Expired"
        }
      },
      info: {
        title: "Ban #{id}",
        badges: {
          ipban: "IP Ban",
          active: "Active",
          expired: "Expired",
          permanent: "Permanent",
        }
      }
    },
    mutes: {
      title: "Mutes",
      // Placeholders: {total}
      subtitle: "Mute count: {total}",
      table: {
        heads: {
          player: "Player",
          by: "Muted by",
          reason: "Reason",
          date: "Date",
          expires: "Expires"
        },
        permanent: "Permanent mute",
        active: {
          true: "Active",
          temporal: "Temporal",
          false: "Expired"
        }
      },
      info: {
        title: "Mute #{id}",
        badges: {
          ipmute: "IP Mute",
          active: "Active",
          expired: "Expired",
          permanent: "Permanent",
        }
      }
    },
    warns: {
      title: "Warns",
      // Placeholders: {total}
      subtitle: "Warn count: {total}",
      table: {
        heads: {
          player: "Player",
          by: "Warned by",
          reason: "Reason",
          date: "Date",
          notified: "Notified"
        },
      },
      info: {
        title: "Warn #{id}"
      }
    },
    kicks: {
      title: "Kicks",
      // Placeholders: {total}
      subtitle: "Kick count: {total}",
      table: {
        heads: {
          player: "Player",
          by: "Kicked by",
          reason: "Reason",
          date: "Date"
        }
      },
      info: {
        title: "Kick #{id}"
      }
    },
    playerHistory: {
      // Placeholders: {player}
      title: "{player}"
    },
    errors: {
      notFound: {
        title: "404",
        description: "Seems like you are lost. Please go back to the main page.",
        button: "Back to home page"
      }
    }
  },
  pagination: {
    previous: "Previous",
    next: "Next"
  },
  notifications: {
    playerNotFound: {
      title: "Error",
      description: "The player does not exist in the database.",
    }
  }
}

module.exports = language;