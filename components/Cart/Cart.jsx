import React, { useEffect } from 'react'

export const Cart = ({ filtered }) => {
  return (
    <>
      {filtered.map(company => (
        <div
          className='filter-tabs__item active'
          data-content='2'
          key={company.id}
        >
          <div className='card card--col-8'>
            <div className='card__wrap xxl-center'>
              <div className='card__col first flex-column'>
                <h5 className='medium-text'>{company.title}</h5>
                <ul className='info-list mb-1 mb-lg-15'>
                  <li className='info-list__item'>
                    <span className='sub-text'>ID {company.id}</span>
                  </li>
                  <li className='info-list__item'>
                    <span className='sub-text'>12 янв 2023 в 14:45</span>
                  </li>
                </ul>
                <div className='flex-column md-reverse'>
                  <div className='status small neutral'>
                    <span className='info-icon img-wrap mr-05'>
                      <img
                        src='https://static.biterika.team/brobooster/assets/images/icons/dot-sub.svg'
                        alt=''
                      />
                    </span>
                    <span className='small-text'>{company.state}</span>
                  </div>
                  <p className='medium-text widescreen-lg-none mt-1 mt-md-0 mb-md-1'>
                    {company.city}
                  </p>
                </div>
              </div>
              <div className='card__col second widescreen-lg'>
                <p className='medium-text'>{company.city}</p>
              </div>
              <div className='card__cols-block mt-1 mt-md-0'>
                <div className='card__row four'>
                  <div className='card__row-col flex-column'>
                    <span className='small-text tablet-none'>
                      {company.locations}
                    </span>
                    <span className='medium-text'>1</span>
                  </div>
                  <div className='card__row-col flex-column'>
                    <span className='small-text tablet-none'>
                      {company.transports}
                    </span>
                    <span className='medium-text'>1</span>
                  </div>
                  <div className='card__row-col flex-column'>
                    <span className='small-text tablet-none'>Показ</span>
                    <span className='medium-text'>{company.display}</span>
                  </div>
                  <div className='card__row-col flex-column'>
                    <span className='small-text tablet-none'>Бюджет</span>
                    <span className='medium-text'>{company.budget}$</span>
                  </div>
                </div>
              </div>
              <div className='card__col third flex-auto'>
                <div className='card__img-wrap'>
                  <div className='card__sm-img card__icon-wrap img-cover'>
                    {company.photos.map(photo => (
                      <img key={photo} src={photo} alt='' />
                    ))}
                    <span className='card__icon fixed'>
                      <span className='small-icon img-wrap'>
                        <img
                          src='https://static.biterika.team/brobooster/assets/images/icons/camera.svg'
                          alt=''
                        />
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              <div className='card__details-col fixed'>
                <div className='menu-wrap js-menu-wrap'>
                  <button type='button' className='btn-more second js-menu-btn'>
                    <svg className='icon icon-small'>
                      <use xmlnsXlink='#more-16'></use>
                    </svg>
                  </button>
                  <div className='menu menu--right js-menu-list'>
                    <div className='menu__wrap'>
                      <ul>
                        <li>
                          <a href='campaing-edit.html' className='menu__btn'>
                            Изменить
                          </a>
                        </li>
                        <li>
                          <button type='button' className='menu__btn'>
                            Дублировать
                          </button>
                        </li>
                        <li>
                          <a href='support.html' className='menu__btn'>
                            Перейти в поддержку
                          </a>
                        </li>
                        <li>
                          <button type='button' className='menu__btn'>
                            Удалить
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <a
                  href='campaing-page.html'
                  className='btn-more second ml-3 ml-lg-4'
                >
                  <svg className='icon icon-small'>
                    <use xmlnsXlink='#arrow-right-16'></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
