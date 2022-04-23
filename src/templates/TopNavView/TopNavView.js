import React, {useState, useEffect,} from 'react';
import PropTypes from 'prop-types';
import {useTranslation} from 'react-i18next';
import View from '../../components/View';
import TopNav, {
    TopNavItemLink,
    TopNavItem,
    // TopNavSearch,
    // TopNavSearchList,
    // TopNavSearchItem
} from '../../components/TopNav';
// import PopupIconButton from '../../components/PopupIconButton';
import DropdownMenu, {DropdownItem} from '../../components/DropdownMenu';
// import IconLabel from '../../components/IconLabel';
import externalLinks from '../../assets/external-links.json';
import avatarPlaceholder from '../../assets/images/avatar-placeholder.png';
import {useGetIdentity} from "@core/auth";
import brandLogo from '../../assets/images/logo.svg'


function MoreMenu() {
    const {t} = useTranslation();

    return <DropdownMenu>
        <DropdownItem component='a' href={externalLinks.developer}>{t('TopNavView.more.developer')}</DropdownItem>
        <DropdownItem component='a' href={externalLinks.policy}>{t('TopNavView.more.policy')}</DropdownItem>
    </DropdownMenu>;
}


function TopNavView({
                        rootPath,
                        searchItems,
                        searchValue,
                        onSearchChange,
                        onSearchConfirm,
                        right,
                        children
                    }) {
    const [searchResult, setSearchResult] = useState(null);
    // const {sessionStore} = useContext(MobXProviderContext)
    const {identity, loading: identityLoading} = useGetIdentity()
    const {t} = useTranslation();
    const userType = identity?.type

    useEffect(() => {
        // if (searchItems && searchItems.length > 0) {
        //     setSearchResult(<TopNavSearchList>
        //         {searchItems.map((item, i) => <TopNavSearchItem
        //             key={i}
        //             imageUrl={item.isLive && (item.user.photoURL || avatarPlaceholder)}
        //             keyword={searchValue}
        //             title={item.user.nickname}
        //             isLive={item.isLive}
        //             linkTo={item.isLive ? `/${item.user.name}` : `/search?keyword=${item.user.nickname}`}
        //         />)}
        //     </TopNavSearchList>);
        // } else {
        //     setSearchResult(null);
        // }
    }, [searchItems, searchValue]);

    return <View root vertical>
        <TopNav

            brand={<img src={brandLogo} alt={t('brand')}/>}
            right={right}
        >
            {userType && <TopNavItemLink active={rootPath === 'campaign/create'}
                                         id={'menu-campaign'}
                                         to='/campaign/create'>{t('TopNavView.new-campaign')}</TopNavItemLink>}
            <TopNavItemLink active={rootPath === '/svc'}
                            id={'menu-svc'}
                            to='/svc'>{t('TopNavView.svc-info')}</TopNavItemLink>
            {/*<TopNavItem>*/}
            {/*    <PopupIconButton menu={<MoreMenu/>}>*/}
            {/*        <IconLabel icon='ellipsis'/>*/}
            {/*    </PopupIconButton>*/}
            {/*</TopNavItem>*/}
        </TopNav>
        {children}
    </View>
}

TopNavView.propTypes = {
    searchItems: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.node,
        linkTo: PropTypes.string
    })),
    rootPath: PropTypes.string,
    onSearchChange: PropTypes.func,
    onSearchConfirm: PropTypes.func,
    searchValue: PropTypes.string,
    right: PropTypes.node,
    children: PropTypes.node
};

export default TopNavView;
