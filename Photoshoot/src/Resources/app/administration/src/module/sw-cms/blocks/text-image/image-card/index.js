import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'image-card',
    label: 'sw-cms.blocks.textImage.imageCard.label',
    category: 'text-image',
    component: 'sw-cms-block-image-card',
    previewComponent: 'sw-cms-preview-image-card',
    defaultConfig: {
        marginBottom: '',
        marginTop: '',
        marginLeft: '15px',
        marginRight: '15px',
        sizingMode: 'boxed'
    },
    slots: {
        'left-image': {
            type: 'image',
            default: {
                config: {
                    displayMode: { source: 'static', value: 'cover' }
                },
                data: {
                    media: {
                        url: '/administration/static/img/cms/preview_camera_large.jpg'
                    }
                }
            }
        },
        'left-text': {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                        <h3>Location</h3>
                        <ul>
                            <li>7 images of your restaurant</li>
                        </ul>
                        <p>
                            This package contains 7 images, e.g. 2 pictures of the outside 5 pictures of your choice: interior, kitchen, service bar.
                        </p>
                        <span>199,- €</span>
                        `.trim()
                    }
                }
            }
        },
        'center-image': {
            type: 'image',
            default: {
                config: {
                    displayMode: { source: 'static', value: 'cover' }
                },
                data: {
                    media: {
                        url: '/administration/static/img/cms/preview_plant_large.jpg'
                    }
                }
            }
        },
        'center-text': {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                        <h3><strong>Food</strong> + Location</h3>
                        <ul>
                            <li>7 images of your restaurant</li>
                            <li>8 images of your dishes</li>
                        </ul>
                        <p>
                            This package contains 15 images. In addition to the location package, you will get 8 great pictures of meals characterizing your art of cooking.
                        </p>
                        <span>299,- €</span>
                        `.trim()
                    }
                }
            }
        },
        'right-image': {
            type: 'image',
            default: {
                config: {
                    displayMode: { source: 'static', value: 'cover' }
                },
                data: {
                    media: {
                        url: '/administration/static/img/cms/preview_glasses_large.jpg'
                    }
                }
            }
        },
        'right-text': {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                        <h3><strong>People</strong> + Food + Location</h3>
                        <ul>
                            <li>7 images of your restaurant</li>
                            <li>8 images of your dishes</li>
                            <li>3 images of your team</li>
                        </ul>
                        <p>
                            This package contains 18 images.It adds 3 more photos of you and your team on top - putting your business at ist best, including the people behind it.
                        </p>
                        <span>399,- €</span>
                        `.trim()

                        

                    }
                }
            }
        },
        'left-button': {
            type: 'button',
            default: {
                config: {
                    buttonText: {
                        source: 'static',
                        value: `
                        Get started
                        `.trim()
                    },
                    buttonLink: {
                        source: 'static',
                        value: ""
                    },
                }
            }
        },
        'center-button': {
            type: 'button',
            default: {
                config: {
                    buttonText: {
                        source: 'static',
                        value: `
                        Get started
                        `.trim()
                    },
                    buttonLink: {
                        source: 'static',
                        value: ""
                    },
                }
            }
        },
        'right-button': {
            type: 'button',
            default: {
                config: {
                    buttonText: {
                        source: 'static',
                        value: `
                        Get started
                        `.trim()
                    },
                    buttonLink: {
                        source: 'static',
                        value: ""
                    },
                }
            }
        }
    }
});
