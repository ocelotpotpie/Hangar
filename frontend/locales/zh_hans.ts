import { LocaleMessageObject } from 'vue-i18n';
const msgs: LocaleMessageObject = {
  general: {
    close: "关闭",
    submit: "提交",
    save: "保存",
    comment: "评论",
    change: "更改",
    donate: "赞助",
    continue: "继续",
    create: "创建",
    delete: "删除",
    or: "或",
    reset: "重置",
    edit: "编辑",
    required: "必填项",
    add: "添加",
    name: "名称",
    link: "链接",
    send: "发送",
    home: "主页",
    message: "讯息",
    refresh: "刷新",
    confirm: "确认",
    error: {
      invalidUrl: "无效 URL 格式"
    }
  },
  hangar: {
    projectSearch: {
      query: "搜索到 {0} 个项目, 自豪地由社区提供...",
      relevanceSort: "根据关联性排序",
      noProjects: "这里没有任何项目。 ??",
      noProjectsFound: "已找到 0 个项目。 ??"
    },
    subtitle: "一个 Minecraft 魔改包仓库",
    sponsoredBy: "由以下组织提供支持"
  },
  pages: {
    staffTitle: "工作人员",
    authorsTitle: "作者",
    headers: {
      username: "用户名",
      roles: "角色",
      joined: "已参与",
      projects: "项目"
    }
  },
  nav: {
    login: "登录",
    signup: "注册",
    user: {
      notifications: "通知",
      flags: "举报",
      projectApprovals: "通过项目审核",
      versionApprovals: "通过版本审核",
      stats: "统计",
      health: "Hangar 健康",
      log: "用户行为日志",
      platformVersions: "平台版本",
      logout: "登出",
      error: {
        loginFailed: "身份验证失败",
        invalidUsername: "用户名无效",
        hangarAuth: "无法连接至 HangarAuth",
        loginDisabled: "登录暂时无法使用，请稍后再作尝试",
        fakeUserEnabled: "虚拟用户模式已启用。{0} 因此关闭"
      }
    },
    createNew: "创建新的...",
    new: {
      project: "新的项目",
      organization: "新的组织"
    },
    hangar: {
      home: "主页",
      forums: "论坛",
      code: "源码",
      docs: "文档",
      javadocs: 'JavaDocs',
      hangar: "Hangar (插件)",
      downloads: "下载",
      community: "社区"
    }
  },
  project: {
    stargazers: "收藏者",
    noStargazers: "目前还没有人收藏这个项目。??",
    watchers: "订阅者",
    noWatchers: "目前还没有人时时关注这个项目的动态。??",
    members: "成员",
    category: {
      info: "类别: {0}",
      admin_tools: "管理员工具",
      chat: "聊天",
      dev_tools: "开发者工具",
      economy: "经济",
      gameplay: "游戏玩法",
      games: "小游戏",
      protection: "保护",
      role_playing: "角色扮演",
      world_management: "世界管理",
      misc: "杂项"
    },
    actions: {
      unwatch: "取消关注",
      watch: "关注",
      flag: "举报",
      star: "收藏",
      unstar: "取消收藏",
      adminActions: "管理员操作",
      flagHistory: "举报历史 ({0})",
      staffNotes: "工作人员笔记 ({0})",
      userActionLogs: "用户操作日志",
      forum: "论坛"
    },
    flag: {
      flagProject: "确定要举报 {0}?",
      flagSend: "举报成功，感谢您让社区变得更好!",
      flagSent: "举报评论",
      flags: {
        inappropriateContent: "不相关内容",
        impersonation: "冒充与欺骗",
        spam: "恶意刷屏",
        malIntent: "病毒内容",
        other: "其他"
      },
      error: {
        alreadyOpen: "您已经在该项目拥有 1 条未被处理的举报",
        alreadyResolved: "这个举报已被处理"
      }
    },
    tabs: {
      docs: "文档",
      versions: "历史版本",
      discuss: "讨论",
      settings: "设置",
      homepage: "主页",
      issues: "问题反馈",
      source: "源码",
      support: "寻求帮助"
    },
    new: {
      step1: {
        title: "用户协定",
        text: "一个项目将包含您所上传插件的下载与文档<br>在开始前, 请阅读 <a href=\"#\">Hangar 资源提交细则。</a>",
        continue: "同意",
        back: "返回"
      },
      step2: {
        title: "基础设置",
        continue: "继续",
        back: "返回",
        userSelect: "创建为...",
        projectName: "项目名称",
        projectSummary: "项目概要",
        projectCategory: "项目类别"
      },
      step3: {
        title: "附加设置",
        continue: "继续",
        back: "返回",
        optional: "选填项",
        links: "链接",
        homepage: "主页",
        issues: "问题追踪器",
        source: "源码",
        support: "额外支持",
        license: "许可证",
        type: "类别",
        customName: "名称",
        url: "网址",
        seo: 'SEO',
        keywords: "关键词"
      },
      step4: {
        title: "从 Spigot 导入",
        continue: "继续",
        back: "返回",
        optional: "选填项",
        convert: "转换",
        saveAsHomePage: "保存为主页",
        convertLabels: {
          bbCode: "粘贴您的 BBCode 到这里",
          output: "Markdown 输出"
        },
        preview: "预览",
        tutorial: "如何获得 BBCode",
        tutorialInstructions: {
          line1: "要获得您在Spigot上项目的 BBCode，您需要做如下几步:",
          line2: "1. 到您项目主页并点击 \"Edit Resource\"。",
          line3: "2. 点击于 description editor 中的扳手图标。",
          line4: "3. 复制粘贴新内容到上面的转换器文本框中，对输出进行更改（如果您确实打算那么做的话），然后点击保存！"
        }
      },
      step5: {
        title: "正在帮您处理最后的工作",
        text: "创建中..."
      },
      error: {
        create: "创建项目时遇到错误",
        nameExists: "相同的项目名称已然存在",
        slugExists: "相同的项目短链已然存在",
        invalidName: "这个名称包含非法字符",
        tooLongName: "项目名称太长啦",
        tooLongDesc: "项目介绍太长啦",
        tooManyKeywords: "项目添加了过多的关键词",
        noCategory: "项目必须有一个类别",
        noDescription: "项目必须有一段介绍"
      }
    },
    sendForApproval: "发送并等待审核",
    info: {
      title: "信息",
      publishDate: "发布于 {0}",
      views: "0 浏览量 | {0} 浏览量 | {0} 浏览量",
      totalDownloads: "0 总下载数 | {0} 总下载数 | {0} 总下载数",
      stars: "0 收藏 | {0} 收藏 | {0} 收藏",
      watchers: "0 关注 | {0} 关注 | {0} 关注"
    },
    promotedVersions: "最新版本",
    license: {
      link: "受制于许可证 "
    },
    error: {
      star: "无法切换收藏状态",
      watch: "无法切换关注状态"
    },
    settings: {
      title: "设置",
      category: "类别",
      categorySub: "将项目分到10个现存类别中的一个。对项目进行适当的分类可以让人们更容易找到。",
      keywords: "关键词",
      keywordsSub: "当人们将它们添加到搜索中时，这些特殊的词将返回您的项目。",
      homepage: "主页",
      homepageSub: "为您的项目创建一个自定义主页有助于使您的项目看起来更养眼、更正式，同时也为您提供另一个收集项目信息的地方。",
      issues: "问题追踪器",
      issuesSub: "提供问题跟踪器可以帮助您的用户更轻松地获得支持，并为您持续跟踪bug状态提供更便利的方式。",
      source: "源码",
      sourceSub: "通过项目开源来促进开发人员社区的长远发展!",
      support: "额外支持",
      supportSub: "您可以为用户提供支持的外部场所。这个场所可能是一个论坛，一个Discord的服务器，或者其他地方。",
      license: "许可证",
      licenseSub: "规定人们能对您的项目做什么 (或不做什么) ?",
      forum: "在论坛开新帖",
      forumSub: "设置当事件发送时（如新版本发布）是否应自动在论坛上创建帖子",
      description: "介绍",
      descriptionSub: "对您的项目作出简明的介绍",
      icon: "图标",
      iconSub: "上传一个能代表您的项目的图片。",
      iconUpload: "上传",
      iconReset: "重置图标",
      apiKey: "API 密钥",
      apiKeySub: "生成唯一的部署密钥以从Gradle启用生成部署",
      apiKeyGenerate: "生成",
      rename: "重命名",
      renameSub: "更改项目名称可能会产生不在预期之内的后果。我们不会为您原来的链接设置任何重定向。",
      delete: "删除",
      deleteSub: "删除项目后，将无法恢复。",
      hardDelete: "彻底删除",
      hardDeleteSub: "删除项目后，将无法恢复该项目。这次是真的...",
      save: "保存更改",
      optional: "(选填项)",
      licenseCustom: "自定义名称",
      licenseType: "类别",
      licenseUrl: "网址",
      donation: {
        enable: "启用",
        enableSub: "启用此项目的捐赠表单",
        email: "邮件",
        emailSub: "贝宝帐户的电子邮件地址，该帐户将接收来自项目捐助的款项",
        defaultAmount: "默认金额",
        defaultAmountSub: "预选的默认捐助金额",
        oneTimeAmounts: "单次金额",
        oneTimeAmountsSub: "您希望为用户提供一次性捐赠的选项列表。用户始终可以输入自定义金额",
        monthlyAmounts: "月度订阅",
        monthlyAmountsSub: "您希望为用户提供的每月捐款选项列表。用户始终可以输入自定义金额"
      },
      error: {
        invalidFile: "{0} 不是一个有效的文件类型",
        noFile: "尚未提交文件",
        members: {
          invalidUser: "{0} 不是一个有效的用户",
          alreadyInvited: "{0} 已经被邀请到项目中了",
          notMember: "{0} 不是该项目成员，因此无法编辑他们在项目中所扮演的角色",
          invalidRole: "{0} 无法从项目中被 添加/移除"
        }
      },
      success: {
        changedIcon: "成功更改项目的图标",
        resetIcon: "成功重置项目的图标",
        rename: "成功将项目重命名为 {0}",
        softDelete: "您已经删除了这个项目",
        hardDelete: "您已经彻底删除这个项目"
      },
      tabs: {
        general: "概览",
        optional: "可选项",
        management: "管理",
        donation: "捐助"
      }
    },
    discuss: {
      login: "登录",
      toReply: "以参加这个讨论",
      noTopic: "目前还没有针对该项目的讨论",
      send: "已发表回复!"
    }
  },
  page: {
    plural: "页面",
    new: {
      title: "创建一个新页面",
      error: {
        minLength: "页面内容太少了",
        maxLength: "页面内容太多了",
        duplicateName: "相同名称的页面已然存在",
        invalidName: "无效的名称",
        name: {
          maxLength: "页面名称太长啦",
          minLength: "页面名称太短啦",
          invalidChars: "页面名称包含非法字符"
        },
        save: "无法保存页面"
      },
      name: "页面名称",
      parent: "上级页面 (选填)"
    },
    delete: {
      title: "确定删除页面?",
      text: "您确定您想要删除这个页面? 这个行为将不能被撤销。"
    }
  },
  version: {
    new: {
      title: "发布版本...",
      upload: "上传文件",
      uploadNew: "上传一个新的版本",
      url: "输入一个 URL",
      form: {
        versionString: "版本",
        fileName: "文件名称",
        fileSize: "文件大小",
        externalUrl: "外链 URL",
        hangarProject: "Hangar 项目",
        channel: "通道",
        addChannel: "添加通道",
        unstable: "不稳定",
        recommended: "推荐",
        forumPost: "论坛发帖",
        release: {
          bulletin: "发布公告",
          desc: "在新版本中值得一提的内容?"
        },
        platforms: "平台",
        dependencies: "插件依赖项"
      },
      error: {
        metaNotFound: "无法从上传的文件中加载 metadata",
        jarNotFound: "无法打开 jar 文件",
        fileExtension: "不正确的文件后缀",
        unexpected: "一个意料之外的错误发生了",
        invalidVersionString: "无效的版本字符串",
        duplicateNameAndPlatform: "一个相同名称的版本和兼容的平台已然存在",
        invalidNumOfPlatforms: "无效的平台序号",
        duplicate: "一个拥有相同文件的版本已然存在",
        noFile: "无法找到上传的文件",
        mismatchedFileSize: "文件大小不匹配",
        hashMismatch: "文件哈希值不匹配",
        invalidPlatformVersion: "指定的平台并不支持该 MC 版本",
        fileIOError: "文件 IO 出错",
        unknown: "一个未知错误已然发生",
        incomplete: "插件文件缺少 {0}",
        noDescription: "必须提供描述",
        invalidPluginDependencyNamespace: "声明的插件依赖项具有无效的项目命名空间",
        invalidName: "无效的版本名称",
        channel: {
          noName: "必须指定一个通道名称",
          noColor: "必须指定一个通道颜色"
        }
      }
    },
    edit: {
      platformVersions: "编辑平台版本: {0}",
      pluginDeps: "编辑插件依赖项: {0}",
      error: {
        noPlatformVersions: "必须至少提供一个有效的平台版本",
        invalidVersionForPlatform: "{0} 于 {1} 是一个无效的版本",
        invalidProjectNamespace: "{0} 不是一个有效的项目命名空间"
      }
    },
    page: {
      subheader: "{0} 发布此版本于 {1}",
      dependencies: "依赖项",
      platform: "平台",
      required: "(必填项)",
      adminMsg: "{0} 通过了于 {1} 的审核",
      reviewLogs: "审核日志",
      reviewStart: "开始审核",
      setRecommended: "设置为推荐",
      setRecommendedTooltip: "在平台 {0} 上设为推荐项目",
      delete: "删除",
      hardDelete: "删除 (永久)",
      restore: "恢复",
      download: "下载",
      downloadExternal: "下载外链",
      adminActions: "管理员操作",
      recommended: "推荐的版本",
      partiallyApproved: "局部批准",
      approved: "批准",
      userAdminLogs: "用户管理日志",
      unsafeWarning: "此版本尚未由我们的审核人员审核，可能无法被安全地下载。",
      downloadUrlCopied: "已复制!",
      confirmation: {
        title: "警告 - {0} {1} 由 {2}",
        alert: "此版本尚未由我们的审核人员审核，可能无法被安全地使用。",
        disclaimer: "免责声明：如果您选择忽视此警告，我们对您的服务器或系统的任何损害概不负责。",
        agree: "下载并自担风险",
        deny: "返回"
      }
    },
    channels: "通道",
    editChannels: "编辑通道",
    platforms: "平台",
    error: {
      onlyOnePublic: "您目前只存在有 1 个公开版本"
    },
    success: {
      softDelete: "您已经删除了这个版本",
      hardDelete: "您已经彻底删除这个版本",
      restore: "您恢复了这个版本",
      recommended: "您将该版本标记为在平台 {0} 上的推荐版本"
    }
  },
  channel: {
    modal: {
      titleNew: "添加一个新的通道",
      titleEdit: "编辑通道",
      name: "通道名称",
      color: "通道颜色",
      reviewQueue: "从审核队列中排除通道?",
      error: {
        invalidName: "无效通道名称",
        maxChannels: "这个项目已经达到了通道持有数上限: {0}",
        duplicateColor: "这个项目已然存在一个相同通道颜色的通道",
        duplicateName: "这个项目已然存在一个相同通道名称的通道",
        tooLongName: "通道名称太长啦",
        cannotDelete: "您无法删除这个通道"
      }
    },
    manage: {
      title: "发行通道",
      subtitle: "发布通道表示插件发布的状态。一个项目最多可以有五个发布通道。",
      channelName: "通道名称",
      versionCount: "版本数",
      reviewed: "审核通过的",
      edit: "编辑",
      trash: "垃圾箱",
      editButton: "编辑",
      deleteButton: "删除",
      add: "添加通道"
    }
  },
  organization: {
    new: {
      title: "创建一个新的组织",
      text: "组织允许您将用户分组，以便在 Hangar 上的项目中为他们提供更紧密的协作关系。",
      name: "组织名称",
      error: {
        duplicateName: "具有相同名称的 组织/用户 已然存在",
        invalidName: "无效的组织名称",
        tooManyOrgs: "您至多只能创建 {0} 个组织",
        notEnabled: "组织功能尚未启用!",
        jsonError: "解析从 HangarAuth 获取的 JSON 出错",
        hangarAuthValidationError: "身份验证出错: {0}",
        unknownError: "在创建组织时遇到了未知错误"
      }
    },
    settings: {
      members: {
        invalidUser: "{0} 不是一个有效的用户",
        alreadyInvited: "{0} 已经被邀请到组织当中了",
        notMember: "{0} 并不是该组织中的成员，因此您不能编辑他们在组织中所扮演的角色。",
        invalidRole: "无法从组织中 添加/移除 {0}"
      }
    }
  },
  form: {
    memberList: {
      addUser: "添加用户...",
      create: "创建",
      editUser: "编辑用户",
      invitedAs: "(邀请并担任 {0})"
    }
  },
  notifications: {
    title: "通知",
    invites: "邀请",
    invited: "您已被邀请至 {0}",
    inviteAccepted: "您接受了来自 {0} 的邀请",
    readAll: "标记所有信息为已读",
    unread: "未读",
    read: "已读",
    all: "全部",
    invite: {
      all: "全部",
      projects: "项目",
      organizations: "组织",
      btns: {
        accept: "接受",
        decline: "谢绝",
        unaccept: "不接受"
      },
      msgs: {
        accept: "您已加入到 {0}",
        decline: "您谢绝加入 {0}",
        unaccept: "您离开了 {0}"
      }
    },
    empty: {
      unread: "您还没有未读通知哦。",
      read: "您有未读通知。",
      all: "您还没有收到过通知。",
      invites: "您还没有收到过邀请"
    },
    project: {
      reviewed: "{0} {1} 已被审核并批准通过",
      reviewedPartial: "{0} {1} 已被审核并局部通过",
      newVersion: "项目 {0} 有新的发行版: {1}",
      invite: "您被邀请至于项目 {1} 的小组 {0}",
      inviteRescinded: "邀请您至项目 {1} 的小组 {0} 的请求已撤销",
      removed: "您已被移出项目 {1} 的小组 {0}",
      roleChanged: "您于项目 {1} 中被添加到 {0} 小组"
    },
    organization: {
      invite: "您被邀请至于组织 {1} 的小组 {0}",
      inviteRescinded: "邀请您至组织 {1} 的小组 {0} 的请求已撤销",
      removed: "您已被移出组织 {1} 的小组 {0}",
      roleChanged: "您于组织 {1} 中被添加到 {0} 小组"
    }
  },
  visibility: {
    notice: {
      new: "此项目是全新的，因此在上传版本之前不会显示给其他人。如果在较长时间内未有版本被发行，则项目将被删除。",
      needsChanges: "此项目需要进行更改",
      needsApproval: "您已将项目送审，静候佳音吧",
      softDelete: "项目被 {0} 删除"
    },
    name: {
      new: "新建",
      public: "公共",
      needsChanges: "需要更改",
      needsApproval: "需要审核",
      softDelete: "删除"
    },
    changes: {
      version: {
        reviewed: "由于审核通过"
      }
    },
    modal: {
      activatorBtn: "可见性操作",
      title: "更改了 {0} 的可见性",
      reason: "更改的原因",
      success: "您更改了 {0} 的可见性为 {1}"
    }
  },
  author: {
    watching: "关注的内容",
    stars: "收藏夹",
    orgs: "组织",
    viewOnForums: "在论坛上查看 ",
    taglineLabel: "用户标语",
    editTagline: "编辑标语",
    memberSince: "注册于 {0}",
    numProjects: "无项目 | {0} 个项目 | {0} 个项目",
    addTagline: "添加一个标语",
    noOrgs: "{0} 不属于任何一个组织。 ??",
    noWatching: "{0} 还没有收藏过任何项目。 ??",
    noStarred: "{0} 还没关注任何项目。 ??",
    tooltips: {
      settings: "用户设置",
      lock: "锁定账户",
      unlock: "解锁账户",
      apiKeys: "API 密钥",
      activity: "用户活动",
      admin: "用户管理"
    },
    lock: {
      confirmLock: "确定要锁定 {0} 的账户?",
      confirmUnlock: "确定要解锁 {0} 的账户?",
      successLock: "成功锁定 {0} 的账户",
      successUnlock: "成功解锁 {0} 的账户"
    },
    org: {
      editAvatar: "编辑头像"
    },
    error: {
      invalidTagline: "无效的标语",
      invalidUsername: "用户名无效"
    }
  },
  linkout: {
    title: "外链警告",
    text: "您刚才点击了前往 \"{0}\" 的链接。如果您不打算访问，请返回，否则，请继续",
    abort: "返回",
    continue: "继续"
  },
  flags: {
    header: "举报至",
    noFlags: "没有举报被找到",
    resolved: "是，由 {0} 于 {1}",
    notResolved: "否"
  },
  notes: {
    header: "笔记至",
    noNotes: "没有笔记被找到",
    addNote: "添加笔记",
    notes: "笔记",
    placeholder: "添加一个笔记..."
  },
  stats: {
    title: "统计",
    plugins: "插件数",
    reviews: "审核数",
    uploads: "上传数",
    downloads: "下载数",
    totalDownloads: "统共下载次数",
    unsafeDownloads: "不安全的下载数",
    flags: "举报数",
    openedFlags: "待处理的举报",
    closedFlags: "已处理的举报"
  },
  health: {
    title: "Hangar 健康报告",
    noTopicProject: "丢失讨论主题",
    erroredJobs: "失败的任务",
    jobText: "任务种类: {0}, 出错种类: {1}, 发生于: {2}",
    staleProjects: "过时的项目",
    notPublicProjects: "隐藏的项目",
    noPlatform: "未检测到平台",
    missingFileProjects: "丢失的文件",
    empty: "空的! 一切运行良好!"
  },
  reviews: {
    headline: "{0} 于 {1} 发行这个版本",
    title: "审核日志",
    projectPage: "项目页面",
    downloadFile: "下载文件",
    startReview: "开始审核",
    stopReview: "停止审核",
    approve: "通过",
    approvePartial: "局部通过",
    notUnderReview: "这个版本尚未处于审核之下",
    reviewMessage: "审核信息",
    addMessage: "添加信息",
    reopenReview: "重新开始审核",
    undoApproval: "撤销通过决议",
    hideClosed: "隐藏所有已完成的审核",
    error: {
      noReviewStarted: "没有要添加消息的未完成审核",
      notCorrectUser: "您不是开启审核这个项目的用户",
      cannotReopen: "无法重新开始这个审核",
      onlyOneReview: "对于一个版本不能有超过 1 次的审核",
      badUndo: "只有在审核通过后才能撤销通过决议"
    },
    presets: {
      message: '{msg}',
      start: "{name} 开启了一个审核",
      stop: "{name} 停止了这次审核: {msg}",
      reopen: "{name} 重开了审核",
      approve: "{name} 通过了此版本",
      approvePartial: "{name} 局部通过了此版本",
      undoApproval: "{name} 撤销了他们的批准",
      reviewTitle: "{name} 的审核"
    },
    state: {
      ongoing: "进行中",
      stopped: "已停止",
      approved: "已通过",
      partiallyApproved: "已局部通过",
      lastUpdate: "最后更新于: {0}"
    }
  },
  apiKeys: {
    title: "API 密钥",
    createNew: "创建新的密钥",
    existing: "现存密钥",
    name: "名称",
    key: "密钥",
    keyIdentifier: "秘钥标识",
    permissions: "权限",
    delete: "删除",
    deleteKey: "删除密钥",
    createKey: "创建密钥",
    noKeys: "这里还没有 api 密钥哦，您可以在右边的按钮那创建一个",
    success: {
      delete: "您删除了密钥: {0}",
      create: "您创建了密钥: {0}"
    },
    error: {
      notEnoughPerms: "没有足够的权限来创建那份密钥",
      duplicateName: "密钥名称已存在"
    }
  },
  apiDocs: {
    title: "API 使用文档"
  },
  platformVersions: {
    title: "配置平台版本",
    platform: "平台",
    versions: "版本",
    addVersion: "添加版本",
    saveChanges: "保存更改",
    success: "更新平台版本"
  },
  flagReview: {
    title: "举报审阅",
    noFlags: "这里还没有举报需要被您审阅。",
    msgUser: "给用户发讯息",
    msgProjectOwner: "给项目所有者发讯息",
    markResolved: "标记为已解决",
    line1: "{0} 于 {2} 举报 {1}",
    line2: "理由: {0}",
    line3: "评论: {0}"
  },
  userActivity: {
    title: "{0} 的动态",
    reviews: "审阅数",
    flags: "举报数",
    reviewApproved: "已通过的审核",
    flagResolved: "已解决的举报",
    error: {
      isOrg: "无法显示组织用户的动态"
    }
  },
  userAdmin: {
    title: "编辑用户",
    organizations: "组织",
    organization: "组织",
    projects: "项目",
    project: "项目",
    owner: "所有者",
    role: "角色",
    accepted: "接受",
    sidebar: "别的管理",
    hangarAuth: "HangarAuth 档案",
    forum: "论坛档案"
  },
  userActionLog: {
    title: "用户行为日志",
    user: "用户",
    address: "IP 地址",
    time: "时间",
    action: "行为",
    context: "内容",
    oldState: "旧状态",
    newState: "新状态",
    markdownView: "Markdown 预览",
    diffView: "Diff 预览",
    types: {
      ProjectVisibilityChanged: "项目可见性状态被更改",
      ProjectRename: "项目被重命名",
      ProjectFlagged: "项目被举报",
      ProjectSettingsChanged: "项目设置被更改",
      ProjectIconChanged: "项目图标被更改",
      ProjectFlagResolved: "举报被解决",
      ProjectChannelCreated: "项目通道被创建",
      ProjectChannelEdited: "项目通道被编辑",
      ProjectChannelDeleted: "项目通道被删除",
      ProjectInvitesSent: "项目协助邀请函被发送",
      ProjectInviteDeclined: "项目协助邀请函被谢绝",
      ProjectInviteUnaccepted: "项目协助邀请函未被接受",
      ProjectMemberAdded: "项目成员被添加",
      ProjectMembersRemoved: "项目成员被移除",
      ProjectMemberRolesChanged: "项目成员角色更新",
      ProjectPageCreated: "项目页面被创建",
      ProjectPageDeleted: "项目页面被删除",
      ProjectPageEdited: "项目页面被编辑",
      VersionVisibilityChanged: "版本可见性状态被更改",
      VersionDeleted: "版本被删除",
      VersionCreated: "一个新版本被上传",
      VersionDescriptionEdited: "版本描述被编辑",
      VersionReviewStateChanged: "版本审核状态被更改",
      VersionPluginDependencyAdded: "插件依赖项被添加",
      VersionPluginDependencyEdited: "插件依赖项被编辑",
      VersionPluginDependencyRemoved: "插件依赖项被移除",
      VersionPlatformDependencyAdded: "平台依赖项被添加",
      VersionPlatformDependencyRemoved: "平台依赖项被移除",
      UserTaglineChanged: "用户标语被更新",
      UserLocked: "这个用户已被锁定",
      UserUnlocked: "这个用户未被锁定",
      UserApikeyCreated: "一个 api 密钥被创建",
      UserApikeyDeleted: "一个 apikey 被删除",
      OrganizationInvitesSent: "组织邀请函被发送",
      OrganizationInviteDeclined: "组织邀请函被谢绝",
      OrganizationInviteUnaccepted: "组织邀请函未被接受",
      OrganizationMemberAdded: "组织成员被添加",
      OrganizationMembersRemoved: "组织成员被移除",
      OrganizationMemberRolesChanged: "组织成员的角色被更改"
    }
  },
  versionApproval: {
    title: "版本审核",
    inReview: "审核中",
    approvalQueue: "通过队列",
    queuedBy: "按以下方式匹配",
    status: "状态",
    project: "项目",
    date: "日期",
    version: "版本",
    started: "开始于: {0}",
    ended: "结束于: {0}",
    statuses: {
      ongoing: "{0} 处于审核中",
      stopped: "{0} 个审核被停止",
      approved: "{0} 个审核被通过"
    }
  },
  projectApproval: {
    title: "项目审核",
    sendForApproval: "您已将项目送审，静候佳音吧",
    noProjects: "无项目",
    needsApproval: "待通过",
    awaitingChanges: "等待更改",
    description: "{0} 要求更改 {1}"
  },
  donate: {
    title: "捐助给 {}",
    monthly: "月度订阅",
    oneTime: "一次性",
    selectAmount: "在上面选择金额或在下面自己输入数字",
    legal: "通过向 {0} 捐款您同意玉米饼很好吃",
    cta: "捐款",
    submit: "按 {0} 捐助"
  },
  lang: {
    button: "切换语言",
    title: "切换语言",
    available: "可用语言",
    hangarAuth: "这只会改变您当前浏览器的区域设置(作为一个 cookie)。点击此处更改您所有的纸质认证上的lang。"
  },
  validation: {
    required: "{0} 是必填的",
    maxLength: "最长不能超过 {0}",
    minLength: "最短不能少于 {0}",
    invalidFormat: "{0} 无效",
    invalidUrl: "无效的 URL 格式"
  },
  prompts: {
    confirm: "了解了!",
    changeAvatar: {
      title: "更改您的头像!",
      message: "欢迎来到您的新组织! 从点击头像进行更改开始迈出您组织发展的第一步吧。"
    }
  },
  error: {
    userLocked: "您的账户被锁定。",
    401: "您必须登录了才可那么做",
    403: "您没有权限来那么做",
    404: "404 未找到",
    unknown: "未知错误发生啦"
  }
};
export default msgs;