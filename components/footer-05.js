import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "footer-05",
  "prefix": "footer05",
  "name": "Footer / Product",
  "category": "footer",
  "collection": "saas",
  "description": "Footer / Product for Harborline.",
  "props": {},
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "div-32",
        "div-39"
      ]
    }
  },
  "tree": {
    "role": "section",
    "style": {
      "base": {
        "font-family": "token(font-saas)",
        "color": "#F4F5F1",
        "background-color": "#0F1115",
        "padding-top": "clamp(48px, 6vw, 80px)",
        "padding-right": "clamp(20px, 4vw, 48px)",
        "padding-bottom": "32px",
        "padding-left": "clamp(20px, 4vw, 48px)"
      }
    },
    "children": [
      {
        "tag": "div",
        "key": "div-40",
        "style": {
          "base": {
            "max-width": "1200px",
            "margin-top": "0",
            "margin-right": "auto",
            "margin-bottom": "0",
            "margin-left": "auto",
            "display": "flex",
            "flex-direction": "column",
            "row-gap": "48px",
            "column-gap": "48px"
          }
        },
        "children": [
          {
            "tag": "div",
            "key": "div-32",
            "style": {
              "base": {
                "display": "flex",
                "flex-wrap": "wrap",
                "row-gap": "40px",
                "column-gap": "56px"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-12",
                "style": {
                  "base": {
                    "flex-grow": "1",
                    "flex-shrink": "1",
                    "flex-basis": "280px",
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "16px",
                    "column-gap": "16px",
                    "max-width": "340px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-4",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "center",
                        "row-gap": "10px",
                        "column-gap": "10px",
                        "font-size": "20px",
                        "font-weight": "600",
                        "letter-spacing": "-0.02em"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-2",
                        "style": {
                          "base": {
                            "width": "26px",
                            "height": "26px",
                            "border-top-left-radius": "7px",
                            "border-top-right-radius": "7px",
                            "border-bottom-right-radius": "7px",
                            "border-bottom-left-radius": "7px",
                            "background-color": "#2D4BF0",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-1",
                            "style": {
                              "base": {
                                "width": "10px",
                                "height": "10px",
                                "border-top-left-radius": "2px",
                                "border-top-right-radius": "2px",
                                "border-bottom-right-radius": "2px",
                                "border-bottom-left-radius": "2px",
                                "background-color": "#FFFFFF"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "text-3",
                        "text": "Harborline"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-5",
                    "style": {
                      "base": {
                        "font-size": "15px",
                        "line-height": "1.6",
                        "color": "#A7ADB6"
                      }
                    },
                    "text": "Scheduling, routes and invoicing for field service teams."
                  },
                  {
                    "tag": "div",
                    "key": "div-10",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "6px",
                        "column-gap": "6px",
                        "font-size": "13px",
                        "color": "#A7ADB6"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "text-9",
                        "text": "Region"
                      },
                      {
                        "tag": "div",
                        "key": "select-6",
                        "style": {
                          "base": {
                            "height": "44px",
                            "max-width": "240px",
                            "padding-top": "0",
                            "padding-right": "12px",
                            "padding-bottom": "0",
                            "padding-left": "12px",
                            "border-top-left-radius": "10px",
                            "border-top-right-radius": "10px",
                            "border-bottom-right-radius": "10px",
                            "border-bottom-left-radius": "10px",
                            "border-top-width": "1px",
                            "border-top-style": "solid",
                            "border-top-color": "#3A3F47",
                            "border-right-width": "1px",
                            "border-right-style": "solid",
                            "border-right-color": "#3A3F47",
                            "border-bottom-width": "1px",
                            "border-bottom-style": "solid",
                            "border-bottom-color": "#3A3F47",
                            "border-left-width": "1px",
                            "border-left-style": "solid",
                            "border-left-color": "#3A3F47",
                            "background-color": "#181B20",
                            "color": "#F4F5F1",
                            "font-size": "15px",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "space-between"
                          }
                        },
                        "attrs": {
                          "role": "combobox"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "text-7",
                            "text": "United States · USD"
                          },
                          {
                            "tag": "div",
                            "key": "text-8",
                            "text": "▾"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-11",
                    "style": {
                      "base": {
                        "font-size": "13px",
                        "color": "#A7ADB6"
                      }
                    },
                    "text": "Prices shown in US dollars."
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-19",
                "style": {
                  "base": {
                    "flex-grow": "0",
                    "flex-shrink": "1",
                    "flex-basis": "160px",
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "12px",
                    "column-gap": "12px"
                  }
                },
                "attrs": {
                  "aria-label": "Product"
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-13",
                    "style": {
                      "base": {
                        "font-family": "token(font-saas-mono)",
                        "font-size": "12px",
                        "letter-spacing": "0.08em",
                        "text-transform": "uppercase",
                        "color": "#8C929B"
                      }
                    },
                    "text": "Product"
                  },
                  {
                    "tag": "a",
                    "key": "a-14",
                    "style": {
                      "base": {
                        "font-size": "15px",
                        "padding-top": "2px",
                        "padding-right": "0",
                        "padding-bottom": "2px",
                        "padding-left": "0",
                        "color": "#C9CDD4",
                        "text-decoration": "none"
                      }
                    },
                    "href": "#",
                    "text": "Scheduling"
                  },
                  {
                    "tag": "a",
                    "key": "a-15",
                    "style": {
                      "base": {
                        "font-size": "15px",
                        "padding-top": "2px",
                        "padding-right": "0",
                        "padding-bottom": "2px",
                        "padding-left": "0",
                        "color": "#C9CDD4",
                        "text-decoration": "none"
                      }
                    },
                    "href": "#",
                    "text": "Routes"
                  },
                  {
                    "tag": "a",
                    "key": "a-16",
                    "style": {
                      "base": {
                        "font-size": "15px",
                        "padding-top": "2px",
                        "padding-right": "0",
                        "padding-bottom": "2px",
                        "padding-left": "0",
                        "color": "#C9CDD4",
                        "text-decoration": "none"
                      }
                    },
                    "href": "#",
                    "text": "Invoicing"
                  },
                  {
                    "tag": "a",
                    "key": "a-17",
                    "style": {
                      "base": {
                        "font-size": "15px",
                        "padding-top": "2px",
                        "padding-right": "0",
                        "padding-bottom": "2px",
                        "padding-left": "0",
                        "color": "#C9CDD4",
                        "text-decoration": "none"
                      }
                    },
                    "href": "#",
                    "text": "Crew app"
                  },
                  {
                    "tag": "a",
                    "key": "a-18",
                    "style": {
                      "base": {
                        "font-size": "15px",
                        "padding-top": "2px",
                        "padding-right": "0",
                        "padding-bottom": "2px",
                        "padding-left": "0",
                        "color": "#C9CDD4",
                        "text-decoration": "none"
                      }
                    },
                    "href": "#",
                    "text": "Pricing"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-25",
                "style": {
                  "base": {
                    "flex-grow": "0",
                    "flex-shrink": "1",
                    "flex-basis": "160px",
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "12px",
                    "column-gap": "12px"
                  }
                },
                "attrs": {
                  "aria-label": "Resources"
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-20",
                    "style": {
                      "base": {
                        "font-family": "token(font-saas-mono)",
                        "font-size": "12px",
                        "letter-spacing": "0.08em",
                        "text-transform": "uppercase",
                        "color": "#8C929B"
                      }
                    },
                    "text": "Resources"
                  },
                  {
                    "tag": "a",
                    "key": "a-21",
                    "style": {
                      "base": {
                        "font-size": "15px",
                        "padding-top": "2px",
                        "padding-right": "0",
                        "padding-bottom": "2px",
                        "padding-left": "0",
                        "color": "#C9CDD4",
                        "text-decoration": "none"
                      }
                    },
                    "href": "#",
                    "text": "Help center"
                  },
                  {
                    "tag": "a",
                    "key": "a-22",
                    "style": {
                      "base": {
                        "font-size": "15px",
                        "padding-top": "2px",
                        "padding-right": "0",
                        "padding-bottom": "2px",
                        "padding-left": "0",
                        "color": "#C9CDD4",
                        "text-decoration": "none"
                      }
                    },
                    "href": "#",
                    "text": "Templates"
                  },
                  {
                    "tag": "a",
                    "key": "a-23",
                    "style": {
                      "base": {
                        "font-size": "15px",
                        "padding-top": "2px",
                        "padding-right": "0",
                        "padding-bottom": "2px",
                        "padding-left": "0",
                        "color": "#C9CDD4",
                        "text-decoration": "none"
                      }
                    },
                    "href": "#",
                    "text": "Changelog"
                  },
                  {
                    "tag": "a",
                    "key": "a-24",
                    "style": {
                      "base": {
                        "font-size": "15px",
                        "padding-top": "2px",
                        "padding-right": "0",
                        "padding-bottom": "2px",
                        "padding-left": "0",
                        "color": "#C9CDD4",
                        "text-decoration": "none"
                      }
                    },
                    "href": "#",
                    "text": "API docs"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-31",
                "style": {
                  "base": {
                    "flex-grow": "0",
                    "flex-shrink": "1",
                    "flex-basis": "160px",
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "12px",
                    "column-gap": "12px"
                  }
                },
                "attrs": {
                  "aria-label": "Company"
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-26",
                    "style": {
                      "base": {
                        "font-family": "token(font-saas-mono)",
                        "font-size": "12px",
                        "letter-spacing": "0.08em",
                        "text-transform": "uppercase",
                        "color": "#8C929B"
                      }
                    },
                    "text": "Company"
                  },
                  {
                    "tag": "a",
                    "key": "a-27",
                    "style": {
                      "base": {
                        "font-size": "15px",
                        "padding-top": "2px",
                        "padding-right": "0",
                        "padding-bottom": "2px",
                        "padding-left": "0",
                        "color": "#C9CDD4",
                        "text-decoration": "none"
                      }
                    },
                    "href": "#",
                    "text": "About"
                  },
                  {
                    "tag": "a",
                    "key": "a-28",
                    "style": {
                      "base": {
                        "font-size": "15px",
                        "padding-top": "2px",
                        "padding-right": "0",
                        "padding-bottom": "2px",
                        "padding-left": "0",
                        "color": "#C9CDD4",
                        "text-decoration": "none"
                      }
                    },
                    "href": "#",
                    "text": "Customers"
                  },
                  {
                    "tag": "a",
                    "key": "a-29",
                    "style": {
                      "base": {
                        "font-size": "15px",
                        "padding-top": "2px",
                        "padding-right": "0",
                        "padding-bottom": "2px",
                        "padding-left": "0",
                        "color": "#C9CDD4",
                        "text-decoration": "none"
                      }
                    },
                    "href": "#",
                    "text": "Careers"
                  },
                  {
                    "tag": "a",
                    "key": "a-30",
                    "style": {
                      "base": {
                        "font-size": "15px",
                        "padding-top": "2px",
                        "padding-right": "0",
                        "padding-bottom": "2px",
                        "padding-left": "0",
                        "color": "#C9CDD4",
                        "text-decoration": "none"
                      }
                    },
                    "href": "#",
                    "text": "Contact"
                  }
                ]
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-39",
            "style": {
              "base": {
                "display": "flex",
                "flex-wrap": "wrap",
                "justify-content": "space-between",
                "align-items": "center",
                "row-gap": "16px",
                "column-gap": "16px",
                "padding-top": "24px",
                "border-top-width": "1px",
                "border-top-style": "solid",
                "border-top-color": "#2C3037",
                "font-size": "14px",
                "color": "#A7ADB6"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-33",
                "text": "© 2026 Harborline, Inc. [Replace with your company.]"
              },
              {
                "tag": "div",
                "key": "div-38",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-wrap": "wrap",
                    "row-gap": "20px",
                    "column-gap": "20px"
                  }
                },
                "children": [
                  {
                    "tag": "a",
                    "key": "a-34",
                    "style": {
                      "base": {
                        "color": "#C9CDD4",
                        "text-decoration": "none"
                      }
                    },
                    "href": "#",
                    "text": "Privacy"
                  },
                  {
                    "tag": "a",
                    "key": "a-35",
                    "style": {
                      "base": {
                        "color": "#C9CDD4",
                        "text-decoration": "none"
                      }
                    },
                    "href": "#",
                    "text": "Terms"
                  },
                  {
                    "tag": "a",
                    "key": "a-36",
                    "style": {
                      "base": {
                        "color": "#C9CDD4",
                        "text-decoration": "none"
                      }
                    },
                    "href": "#",
                    "text": "Status"
                  },
                  {
                    "tag": "a",
                    "key": "a-37",
                    "style": {
                      "base": {
                        "color": "#C9CDD4",
                        "text-decoration": "none"
                      }
                    },
                    "href": "#",
                    "text": "Security"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
spec.variants = {
  theme: themeVariant({
    palette: "saas",
    default: "dark",
    map: { section: { "background-color": "bg", color: "fg" } },
  }),
};
export default spec;
