import Link from "next/link";

export default function MenuService({handleMouseLeave, t}) {
    
    return (
        <>
            <div className="dropdown-menu" onMouseLeave={()=>handleMouseLeave()}>
                <Link  href={'/services?param=1'} >{t('CREATIVE')} {t('DESIGNS')}</Link>
                <Link href={'/services?param=2'}>{t('DIGITAL')} {t('MARKETING')}</Link>
                <Link href={'/services?param=3'}>{t('PHOTOS')} {t('&VIDEOS')}</Link>
                <Link href={'/services?param=4'}>{t('MODELING')} {t('SERVICES')}</Link>
                <Link href={'/FifthService'}>{t('APPS & WEB')} {t('DEVELOPMENT')}</Link>
                <Link href={'/drag'}>{t('BLOGGERS')} {t('SERVICES')}</Link>
            </div>

          
        </>
    )
}