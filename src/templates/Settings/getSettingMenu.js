import i18next from 'i18next';

export default function getSettingMenu(activeMenu, privileges, isPasswordUser = false) {
  const menuGroups = [
    {
      title: i18next.t('Settings.menu.settings'),
      icon: 'gear',
      items: [
        {
          title: i18next.t('Settings.menu.profile'),
          linkTo: '/settings/profile'
        },
        {
          title: i18next.t('Settings.menu.point'),
          linkTo: '/settings/point'
        }
      ]
    },
    // {
    //   title: i18next.t('Settings.menu.streamerChannel'),
    //   icon: 'dashboard',
    //   items: [
    //     {
    //       title: i18next.t('Settings.menu.channel'),
    //       linkTo: '/settings/channel'
    //     },
    //     {
    //       title: i18next.t('Settings.menu.live'),
    //       linkTo: '/settings/live'
    //     },
    //     {
    //       title: i18next.t('Settings.menu.liveStat'),
    //       linkTo: '/settings/live-stat'
    //     },
    //     {
    //       title: i18next.t('Settings.menu.liveHistory'),
    //       linkTo: '/settings/live-history'
    //     },
    //     {
    //       title: i18next.t('Settings.menu.game'),
    //       linkTo: '/settings/game'
    //     }
    //   ]
    // },
    // {
    //   title: i18next.t('Settings.menu.userManagement'),
    //   icon: 'user',
    //   items: [
    //     {
    //       title: i18next.t('Settings.menu.manager'),
    //       linkTo: '/settings/manager'
    //     },
    //     {
    //       title: i18next.t('Settings.menu.fan'),
    //       linkTo: '/settings/fan'
    //     },
    //     {
    //       title: i18next.t('Settings.menu.blockedUser'),
    //       linkTo: '/settings/blocked-user'
    //     }
    //   ]
    // }
  ];

  // if (isAgency) {
  //   menuGroups.push({
  //     title: i18next.t('Settings.menu.agencyAdmin'),
  //     icon: 'monitor',
  //     items: [
  //       {
  //         title: i18next.t('Settings.menu.memberManagement'),
  //         linkTo: '/settings/agency/members'
  //       },
  //       {
  //         title: i18next.t('Settings.menu.joinRequest'),
  //         linkTo: '/settings/agency/requests'
  //       }
  //     ]
  //   });
  // } else {
  //   menuGroups.push({
  //     title: i18next.t('Settings.menu.agency'),
  //     icon: 'agency',
  //     items: [
  //       {
  //         title: i18next.t('Settings.menu.joinAgency'),
  //         linkTo: '/settings/agency/join'
  //       },
  //       {
  //         title: i18next.t('Settings.menu.myAgency'),
  //         linkTo: '/settings/my-agency'
  //       },
  //       {
  //         title: i18next.t('Settings.menu.registerAgency'),
  //         linkTo: '/settings/agency/register'
  //       }
  //     ]
  //   });
  // }
  // if (privileges) {
  //   if (privileges.length > 0) {
  //     menuGroups.push({
  //           title: i18next.t('Settings.menu.agency'),
  //           icon: 'agency',
  //           items: [
  //             {
  //               title: i18next.t('Settings.menu.joinAgency'),
  //               linkTo: '/settings/agency/join'
  //             },
  //             {
  //               title: i18next.t('Settings.menu.myAgency'),
  //               linkTo: '/settings/my-agency'
  //             },
  //             {
  //               title: i18next.t('Settings.menu.registerAgency'),
  //               linkTo: '/settings/agency/register'
  //             }
  //           ]
  //         });
  //   }
  // }

  // if (isPasswordUser) {
  //   menuGroups.push({
  //     title: i18next.t('Settings.menu.etc'),
  //     icon: 'ellipsis-h',
  //     items: [
  //       {
  //         title: i18next.t('Settings.menu.resetPassword'),
  //         linkTo: '/settings/reset-password'
  //       },
  //       {
  //         title: i18next.t('Settings.menu.unregister'),
  //         linkTo: '/settings/unregister'
  //       }
  //     ]
  //   });
  // } else {
  //   menuGroups.push({
  //     title: i18next.t('Settings.menu.etc'),
  //     icon: 'ellipsis-h',
  //     items: [
  //       {
  //         title: i18next.t('Settings.menu.unregister'),
  //         linkTo: '/settings/unregister'
  //       }
  //     ]
  //   });
  // }

  for (const group of menuGroups) {
    const item = group.items.find(p => p.linkTo.indexOf(activeMenu) >= 0);

    if (item) {
      item.active = true;

      return {
        menuGroups,
        activeItem: item
      };
    }
  }

  return {
    menuGroups,
    activeItem: null
  };
}
