import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "cases-01",
  "prefix": "cases01",
  "name": "Use cases / Role switcher",
  "category": "cases",
  "collection": "saas",
  "description": "Use cases / Role switcher for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "Built for"
    },
    "subheading": {
      "type": "text",
      "default": "Revenue, unpaid invoices and tomorrow’s schedule on one screen, so evenings stay evenings."
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-6",
        "div-39"
      ]
    }
  },
  "tree": {
    "role": "section",
    "style": {
      "base": {
        "font-family": "token(font-saas)",
        "color": "#0F1115",
        "background-color": "#F4F5F1",
        "padding-top": "clamp(56px, 8vw, 104px)",
        "padding-right": "clamp(20px, 4vw, 48px)",
        "padding-bottom": "clamp(56px, 8vw, 104px)",
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
            "row-gap": "36px",
            "column-gap": "36px"
          }
        },
        "children": [
          {
            "tag": "div",
            "key": "div-6",
            "style": {
              "base": {
                "display": "flex",
                "flex-wrap": "wrap",
                "align-items": "center",
                "row-gap": "16px",
                "column-gap": "16px"
              }
            },
            "children": [
              {
                "tag": "h2",
                "key": "heading",
                "style": {
                  "base": {
                    "margin-top": "0",
                    "margin-right": "0",
                    "margin-bottom": "0",
                    "margin-left": "0",
                    "font-size": "clamp(30px, 3.6vw, 44px)",
                    "line-height": "1.05",
                    "letter-spacing": "-0.035em",
                    "font-weight": "600"
                  }
                },
                "bind": "heading"
              },
              {
                "tag": "div",
                "key": "div-5",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-wrap": "wrap",
                    "row-gap": "8px",
                    "column-gap": "8px"
                  }
                },
                "attrs": {
                  "role": "tablist",
                  "aria-label": "Choose a role",
                  "data-blok-choices": ""
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-2",
                    "style": {
                      "base": {
                        "height": "52px",
                        "padding-top": "0",
                        "padding-right": "22px",
                        "padding-bottom": "0",
                        "padding-left": "22px",
                        "border-top-left-radius": "999px",
                        "border-top-right-radius": "999px",
                        "border-bottom-right-radius": "999px",
                        "border-bottom-left-radius": "999px",
                        "cursor": "pointer",
                        "font-size": "clamp(18px, 2vw, 24px)",
                        "font-weight": "600",
                        "letter-spacing": "-0.02em",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#0F1115",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#0F1115",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#0F1115",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#0F1115",
                        "background-color": "#0F1115",
                        "color": "#FFFFFF",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "attrs": {
                      "role": "tab",
                      "aria-selected": "true",
                      "data-blok-choice": ""
                    },
                    "text": "Owners"
                  },
                  {
                    "tag": "div",
                    "key": "div-3",
                    "style": {
                      "base": {
                        "height": "52px",
                        "padding-top": "0",
                        "padding-right": "22px",
                        "padding-bottom": "0",
                        "padding-left": "22px",
                        "border-top-left-radius": "999px",
                        "border-top-right-radius": "999px",
                        "border-bottom-right-radius": "999px",
                        "border-bottom-left-radius": "999px",
                        "cursor": "pointer",
                        "font-size": "clamp(18px, 2vw, 24px)",
                        "font-weight": "600",
                        "letter-spacing": "-0.02em",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CFD3CA",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#CFD3CA",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CFD3CA",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CFD3CA",
                        "background-color": "transparent",
                        "color": "#4E545D",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "attrs": {
                      "role": "tab",
                      "aria-selected": "false",
                      "data-blok-choice": ""
                    },
                    "text": "Dispatchers"
                  },
                  {
                    "tag": "div",
                    "key": "div-4",
                    "style": {
                      "base": {
                        "height": "52px",
                        "padding-top": "0",
                        "padding-right": "22px",
                        "padding-bottom": "0",
                        "padding-left": "22px",
                        "border-top-left-radius": "999px",
                        "border-top-right-radius": "999px",
                        "border-bottom-right-radius": "999px",
                        "border-bottom-left-radius": "999px",
                        "cursor": "pointer",
                        "font-size": "clamp(18px, 2vw, 24px)",
                        "font-weight": "600",
                        "letter-spacing": "-0.02em",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CFD3CA",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#CFD3CA",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CFD3CA",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CFD3CA",
                        "background-color": "transparent",
                        "color": "#4E545D",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "attrs": {
                      "role": "tab",
                      "aria-selected": "false",
                      "data-blok-choice": ""
                    },
                    "text": "Crews"
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
                "row-gap": "28px",
                "column-gap": "28px",
                "align-items": "stretch"
              }
            },
            "attrs": {
              "role": "tabpanel"
            },
            "children": [
              {
                "tag": "div",
                "key": "div-20",
                "style": {
                  "base": {
                    "flex-grow": "1",
                    "flex-shrink": "1",
                    "flex-basis": "380px",
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "22px",
                    "column-gap": "22px",
                    "padding-top": "clamp(24px, 3vw, 40px)",
                    "padding-right": "clamp(24px, 3vw, 40px)",
                    "padding-bottom": "clamp(24px, 3vw, 40px)",
                    "padding-left": "clamp(24px, 3vw, 40px)",
                    "background-color": "#FFFFFF",
                    "border-top-width": "1px",
                    "border-top-style": "solid",
                    "border-top-color": "#DDE0D8",
                    "border-right-width": "1px",
                    "border-right-style": "solid",
                    "border-right-color": "#DDE0D8",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#DDE0D8",
                    "border-left-width": "1px",
                    "border-left-style": "solid",
                    "border-left-color": "#DDE0D8",
                    "border-top-left-radius": "20px",
                    "border-top-right-radius": "20px",
                    "border-bottom-right-radius": "20px",
                    "border-bottom-left-radius": "20px"
                  }
                },
                "children": [
                  {
                    "tag": "h3",
                    "key": "h3-7",
                    "style": {
                      "base": {
                        "margin-top": "0",
                        "margin-right": "0",
                        "margin-bottom": "0",
                        "margin-left": "0",
                        "font-size": "clamp(26px, 2.8vw, 36px)",
                        "line-height": "1.1",
                        "letter-spacing": "-0.03em",
                        "font-weight": "600"
                      }
                    },
                    "text": "See the whole business without asking anyone"
                  },
                  {
                    "tag": "p",
                    "key": "subheading",
                    "style": {
                      "base": {
                        "margin-top": "0",
                        "margin-right": "0",
                        "margin-bottom": "0",
                        "margin-left": "0",
                        "font-size": "17px",
                        "line-height": "1.6",
                        "color": "#4E545D"
                      }
                    },
                    "bind": "subheading"
                  },
                  {
                    "tag": "div",
                    "key": "div-18",
                    "style": {
                      "base": {
                        "list-style": "none",
                        "margin-top": "0",
                        "margin-right": "0",
                        "margin-bottom": "0",
                        "margin-left": "0",
                        "padding-top": "0",
                        "padding-right": "0",
                        "padding-bottom": "0",
                        "padding-left": "0",
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "12px",
                        "column-gap": "12px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-11",
                        "style": {
                          "base": {
                            "display": "flex",
                            "row-gap": "12px",
                            "column-gap": "12px",
                            "align-items": "flex-start",
                            "font-size": "16px",
                            "line-height": "1.5"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-9",
                            "style": {
                              "base": {
                                "flex-shrink": "0",
                                "margin-top": "2px",
                                "width": "20px",
                                "height": "20px",
                                "border-top-left-radius": "50%",
                                "border-top-right-radius": "50%",
                                "border-bottom-right-radius": "50%",
                                "border-bottom-left-radius": "50%",
                                "background-color": "#E8ECFE",
                                "color": "#2D4BF0",
                                "display": "flex",
                                "align-items": "center",
                                "justify-content": "center",
                                "font-size": "12px",
                                "font-weight": "700"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "text": "✓"
                          },
                          {
                            "tag": "div",
                            "key": "div-10",
                            "text": "Live view of every crew"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-14",
                        "style": {
                          "base": {
                            "display": "flex",
                            "row-gap": "12px",
                            "column-gap": "12px",
                            "align-items": "flex-start",
                            "font-size": "16px",
                            "line-height": "1.5"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-12",
                            "style": {
                              "base": {
                                "flex-shrink": "0",
                                "margin-top": "2px",
                                "width": "20px",
                                "height": "20px",
                                "border-top-left-radius": "50%",
                                "border-top-right-radius": "50%",
                                "border-bottom-right-radius": "50%",
                                "border-bottom-left-radius": "50%",
                                "background-color": "#E8ECFE",
                                "color": "#2D4BF0",
                                "display": "flex",
                                "align-items": "center",
                                "justify-content": "center",
                                "font-size": "12px",
                                "font-weight": "700"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "text": "✓"
                          },
                          {
                            "tag": "div",
                            "key": "div-13",
                            "text": "Unpaid invoices chased for you"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-17",
                        "style": {
                          "base": {
                            "display": "flex",
                            "row-gap": "12px",
                            "column-gap": "12px",
                            "align-items": "flex-start",
                            "font-size": "16px",
                            "line-height": "1.5"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-15",
                            "style": {
                              "base": {
                                "flex-shrink": "0",
                                "margin-top": "2px",
                                "width": "20px",
                                "height": "20px",
                                "border-top-left-radius": "50%",
                                "border-top-right-radius": "50%",
                                "border-bottom-right-radius": "50%",
                                "border-bottom-left-radius": "50%",
                                "background-color": "#E8ECFE",
                                "color": "#2D4BF0",
                                "display": "flex",
                                "align-items": "center",
                                "justify-content": "center",
                                "font-size": "12px",
                                "font-weight": "700"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "text": "✓"
                          },
                          {
                            "tag": "div",
                            "key": "div-16",
                            "text": "Weekly summary in your inbox"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "a",
                    "key": "a-19",
                    "style": {
                      "base": {
                        "margin-top": "auto",
                        "font-weight": "500",
                        "text-decoration": "none",
                        "color": "#2D4BF0"
                      }
                    },
                    "href": "#",
                    "text": "See the owner dashboard →"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-38",
                "style": {
                  "base": {
                    "flex-grow": "1",
                    "flex-shrink": "1",
                    "flex-basis": "420px",
                    "min-width": "0",
                    "min-height": "380px",
                    "border-top-left-radius": "20px",
                    "border-top-right-radius": "20px",
                    "border-bottom-right-radius": "20px",
                    "border-bottom-left-radius": "20px",
                    "background-color": "#0F1115",
                    "padding-top": "clamp(20px, 3vw, 36px)",
                    "padding-right": "clamp(20px, 3vw, 36px)",
                    "padding-bottom": "clamp(20px, 3vw, 36px)",
                    "padding-left": "clamp(20px, 3vw, 36px)",
                    "display": "flex",
                    "align-items": "center",
                    "justify-content": "center"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-37",
                    "style": {
                      "base": {
                        "width": "100%",
                        "max-width": "460px",
                        "background-color": "#FFFFFF",
                        "border-top-left-radius": "16px",
                        "border-top-right-radius": "16px",
                        "border-bottom-right-radius": "16px",
                        "border-bottom-left-radius": "16px",
                        "overflow": "hidden"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-23",
                        "style": {
                          "base": {
                            "padding-top": "14px",
                            "padding-right": "18px",
                            "padding-bottom": "14px",
                            "padding-left": "18px",
                            "display": "flex",
                            "justify-content": "space-between",
                            "align-items": "center",
                            "border-bottom-width": "1px",
                            "border-bottom-style": "solid",
                            "border-bottom-color": "#ECEEE8"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-21",
                            "style": {
                              "base": {
                                "font-weight": "600",
                                "font-size": "15px"
                              }
                            },
                            "text": "This week"
                          },
                          {
                            "tag": "div",
                            "key": "div-22",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)",
                                "font-size": "11px",
                                "color": "#5B616B"
                              }
                            },
                            "text": "Desktop"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-36",
                        "style": {
                          "base": {
                            "padding-top": "14px",
                            "padding-right": "14px",
                            "padding-bottom": "14px",
                            "padding-left": "14px",
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "8px",
                            "column-gap": "8px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-26",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "align-items": "center",
                                "row-gap": "12px",
                                "column-gap": "12px",
                                "padding-top": "12px",
                                "padding-right": "14px",
                                "padding-bottom": "12px",
                                "padding-left": "14px",
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
                                "background-color": "#F6F7F3",
                                "font-size": "14px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-24",
                                "style": {
                                  "base": {
                                    "font-weight": "500"
                                  }
                                },
                                "text": "Jobs scheduled"
                              },
                              {
                                "tag": "div",
                                "key": "div-25",
                                "style": {
                                  "base": {
                                    "color": "#4E545D"
                                  }
                                },
                                "text": "[COUNT]"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-29",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "align-items": "center",
                                "row-gap": "12px",
                                "column-gap": "12px",
                                "padding-top": "12px",
                                "padding-right": "14px",
                                "padding-bottom": "12px",
                                "padding-left": "14px",
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
                                "background-color": "#F6F7F3",
                                "font-size": "14px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-27",
                                "style": {
                                  "base": {
                                    "font-weight": "500"
                                  }
                                },
                                "text": "Invoices outstanding"
                              },
                              {
                                "tag": "div",
                                "key": "div-28",
                                "style": {
                                  "base": {
                                    "color": "#4E545D"
                                  }
                                },
                                "text": "[AMOUNT]"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-32",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "align-items": "center",
                                "row-gap": "12px",
                                "column-gap": "12px",
                                "padding-top": "12px",
                                "padding-right": "14px",
                                "padding-bottom": "12px",
                                "padding-left": "14px",
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
                                "background-color": "#F6F7F3",
                                "font-size": "14px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-30",
                                "style": {
                                  "base": {
                                    "font-weight": "500"
                                  }
                                },
                                "text": "Crews on site"
                              },
                              {
                                "tag": "div",
                                "key": "div-31",
                                "style": {
                                  "base": {
                                    "color": "#4E545D"
                                  }
                                },
                                "text": "[COUNT]"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-35",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "align-items": "center",
                                "row-gap": "12px",
                                "column-gap": "12px",
                                "padding-top": "12px",
                                "padding-right": "14px",
                                "padding-bottom": "12px",
                                "padding-left": "14px",
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
                                "background-color": "#F6F7F3",
                                "font-size": "14px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-33",
                                "style": {
                                  "base": {
                                    "font-weight": "500"
                                  }
                                },
                                "text": "Next open slot"
                              },
                              {
                                "tag": "div",
                                "key": "div-34",
                                "style": {
                                  "base": {
                                    "color": "#4E545D"
                                  }
                                },
                                "text": "Thu, 1pm"
                              }
                            ]
                          }
                        ]
                      }
                    ]
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
    default: "light",
    map: { section: { "background-color": "bg", color: "fg" } },
  }),
};
export default spec;
