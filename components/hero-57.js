import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "hero-57",
  "prefix": "hero57",
  "name": "Hero / Product tour",
  "category": "hero",
  "collection": "saas",
  "description": "Hero / Product tour for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "Run every job from one calm screen"
    },
    "subheading": {
      "type": "text",
      "default": "Harborline schedules your crews, plans the route and sends the invoice the moment the work is done."
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-9",
        "div-52"
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
        "key": "div-53",
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
            "key": "div-9",
            "style": {
              "base": {
                "display": "flex",
                "flex-direction": "column",
                "align-items": "center",
                "text-align": "center",
                "row-gap": "22px",
                "column-gap": "22px"
              }
            },
            "children": [
              {
                "tag": "a",
                "key": "a-3",
                "style": {
                  "base": {
                    "display": "flex",
                    "align-items": "center",
                    "row-gap": "10px",
                    "column-gap": "10px",
                    "padding-top": "6px",
                    "padding-right": "14px",
                    "padding-bottom": "6px",
                    "padding-left": "6px",
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
                    "border-top-left-radius": "999px",
                    "border-top-right-radius": "999px",
                    "border-bottom-right-radius": "999px",
                    "border-bottom-left-radius": "999px",
                    "background-color": "#FFFFFF",
                    "color": "#0F1115",
                    "text-decoration": "none",
                    "font-size": "14px"
                  }
                },
                "href": "#",
                "children": [
                  {
                    "tag": "div",
                    "key": "div-1",
                    "style": {
                      "base": {
                        "background-color": "#2D4BF0",
                        "color": "#FFFFFF",
                        "border-top-left-radius": "999px",
                        "border-top-right-radius": "999px",
                        "border-bottom-right-radius": "999px",
                        "border-bottom-left-radius": "999px",
                        "padding-top": "3px",
                        "padding-right": "9px",
                        "padding-bottom": "3px",
                        "padding-left": "9px",
                        "font-family": "token(font-saas-mono)",
                        "font-size": "11px",
                        "letter-spacing": "0.06em"
                      }
                    },
                    "text": "NEW"
                  },
                  {
                    "tag": "div",
                    "key": "text-2",
                    "text": "Route optimization is here"
                  }
                ]
              },
              {
                "tag": "h1",
                "key": "heading",
                "style": {
                  "base": {
                    "margin-top": "0",
                    "margin-right": "0",
                    "margin-bottom": "0",
                    "margin-left": "0",
                    "max-width": "860px",
                    "font-size": "clamp(42px, 6.4vw, 84px)",
                    "line-height": "0.98",
                    "letter-spacing": "-0.045em",
                    "font-weight": "600"
                  }
                },
                "bind": "heading"
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
                    "max-width": "600px",
                    "font-size": "19px",
                    "line-height": "1.55",
                    "color": "#4E545D"
                  }
                },
                "bind": "subheading"
              },
              {
                "tag": "div",
                "key": "div-8",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-wrap": "wrap",
                    "justify-content": "center",
                    "row-gap": "12px",
                    "column-gap": "12px"
                  }
                },
                "children": [
                  {
                    "tag": "a",
                    "key": "a-6",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "center",
                        "height": "48px",
                        "padding-top": "0",
                        "padding-right": "22px",
                        "padding-bottom": "0",
                        "padding-left": "22px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
                        "background-color": "#0F1115",
                        "color": "#FFFFFF",
                        "text-decoration": "none",
                        "font-weight": "500"
                      }
                    },
                    "href": "#",
                    "text": "Start free trial"
                  },
                  {
                    "tag": "a",
                    "key": "a-7",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "center",
                        "height": "48px",
                        "padding-top": "0",
                        "padding-right": "22px",
                        "padding-bottom": "0",
                        "padding-left": "22px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
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
                        "color": "#0F1115",
                        "text-decoration": "none",
                        "font-weight": "500",
                        "background-color": "#FFFFFF"
                      }
                    },
                    "href": "#",
                    "text": "Book a demo"
                  }
                ]
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-52",
            "style": {
              "base": {
                "display": "flex",
                "flex-direction": "column",
                "row-gap": "16px",
                "column-gap": "16px"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-13",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-wrap": "wrap",
                    "justify-content": "center",
                    "row-gap": "6px",
                    "column-gap": "6px",
                    "padding-top": "6px",
                    "padding-right": "6px",
                    "padding-bottom": "6px",
                    "padding-left": "6px",
                    "background-color": "#E9EBE5",
                    "border-top-left-radius": "12px",
                    "border-top-right-radius": "12px",
                    "border-bottom-right-radius": "12px",
                    "border-bottom-left-radius": "12px",
                    "align-self": "center"
                  }
                },
                "attrs": {
                  "role": "tablist",
                  "aria-label": "Product tour",
                  "data-blok-choices": ""
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-10",
                    "style": {
                      "base": {
                        "height": "44px",
                        "padding-top": "0",
                        "padding-right": "20px",
                        "padding-bottom": "0",
                        "padding-left": "20px",
                        "border-top-width": "0",
                        "border-top-style": "none",
                        "border-top-color": "transparent",
                        "border-right-width": "0",
                        "border-right-style": "none",
                        "border-right-color": "transparent",
                        "border-bottom-width": "0",
                        "border-bottom-style": "none",
                        "border-bottom-color": "transparent",
                        "border-left-width": "0",
                        "border-left-style": "none",
                        "border-left-color": "transparent",
                        "border-top-left-radius": "8px",
                        "border-top-right-radius": "8px",
                        "border-bottom-right-radius": "8px",
                        "border-bottom-left-radius": "8px",
                        "cursor": "pointer",
                        "font-weight": "500",
                        "font-size": "15px",
                        "background-color": "#FFFFFF",
                        "color": "#0F1115",
                        "box-shadow": "0 1px 2px rgba(15,17,21,0.12)",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "attrs": {
                      "role": "tab",
                      "aria-selected": "true",
                      "data-blok-panel-go": "",
                      "data-blok-choice": ""
                    },
                    "text": "Schedule"
                  },
                  {
                    "tag": "div",
                    "key": "div-11",
                    "style": {
                      "base": {
                        "height": "44px",
                        "padding-top": "0",
                        "padding-right": "20px",
                        "padding-bottom": "0",
                        "padding-left": "20px",
                        "border-top-width": "0",
                        "border-top-style": "none",
                        "border-top-color": "transparent",
                        "border-right-width": "0",
                        "border-right-style": "none",
                        "border-right-color": "transparent",
                        "border-bottom-width": "0",
                        "border-bottom-style": "none",
                        "border-bottom-color": "transparent",
                        "border-left-width": "0",
                        "border-left-style": "none",
                        "border-left-color": "transparent",
                        "border-top-left-radius": "8px",
                        "border-top-right-radius": "8px",
                        "border-bottom-right-radius": "8px",
                        "border-bottom-left-radius": "8px",
                        "cursor": "pointer",
                        "font-weight": "500",
                        "font-size": "15px",
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
                      "data-blok-panel-go": "",
                      "data-blok-choice": ""
                    },
                    "text": "Route"
                  },
                  {
                    "tag": "div",
                    "key": "div-12",
                    "style": {
                      "base": {
                        "height": "44px",
                        "padding-top": "0",
                        "padding-right": "20px",
                        "padding-bottom": "0",
                        "padding-left": "20px",
                        "border-top-width": "0",
                        "border-top-style": "none",
                        "border-top-color": "transparent",
                        "border-right-width": "0",
                        "border-right-style": "none",
                        "border-right-color": "transparent",
                        "border-bottom-width": "0",
                        "border-bottom-style": "none",
                        "border-bottom-color": "transparent",
                        "border-left-width": "0",
                        "border-left-style": "none",
                        "border-left-color": "transparent",
                        "border-top-left-radius": "8px",
                        "border-top-right-radius": "8px",
                        "border-bottom-right-radius": "8px",
                        "border-bottom-left-radius": "8px",
                        "cursor": "pointer",
                        "font-weight": "500",
                        "font-size": "15px",
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
                      "data-blok-panel-go": "",
                      "data-blok-choice": ""
                    },
                    "text": "Invoice"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "stack-160",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-direction": "column",
                    "width": "100%"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-51",
                    "style": {
                      "base": {
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
                        "border-top-left-radius": "18px",
                        "border-top-right-radius": "18px",
                        "border-bottom-right-radius": "18px",
                        "border-bottom-left-radius": "18px",
                        "box-shadow": "0 30px 60px -30px rgba(15,17,21,0.25)",
                        "overflow": "hidden"
                      }
                    },
                    "attrs": {
                      "role": "tabpanel",
                      "data-blok-panel": "",
                      "data-display": "block"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-18",
                        "style": {
                          "base": {
                            "display": "flex",
                            "align-items": "center",
                            "row-gap": "8px",
                            "column-gap": "8px",
                            "padding-top": "12px",
                            "padding-right": "16px",
                            "padding-bottom": "12px",
                            "padding-left": "16px",
                            "border-bottom-width": "1px",
                            "border-bottom-style": "solid",
                            "border-bottom-color": "#ECEEE8"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-14",
                            "style": {
                              "base": {
                                "width": "10px",
                                "height": "10px",
                                "border-top-left-radius": "50%",
                                "border-top-right-radius": "50%",
                                "border-bottom-right-radius": "50%",
                                "border-bottom-left-radius": "50%",
                                "background-color": "#E2E4DE"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-15",
                            "style": {
                              "base": {
                                "width": "10px",
                                "height": "10px",
                                "border-top-left-radius": "50%",
                                "border-top-right-radius": "50%",
                                "border-bottom-right-radius": "50%",
                                "border-bottom-left-radius": "50%",
                                "background-color": "#E2E4DE"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-16",
                            "style": {
                              "base": {
                                "width": "10px",
                                "height": "10px",
                                "border-top-left-radius": "50%",
                                "border-top-right-radius": "50%",
                                "border-bottom-right-radius": "50%",
                                "border-bottom-left-radius": "50%",
                                "background-color": "#E2E4DE"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-17",
                            "style": {
                              "base": {
                                "margin-left": "12px",
                                "font-family": "token(font-saas-mono)",
                                "font-size": "12px",
                                "color": "#5B616B"
                              }
                            },
                            "text": "app.harborline.example / schedule"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-50",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-wrap": "wrap",
                            "min-height": "380px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-24",
                            "style": {
                              "base": {
                                "flex-grow": "1",
                                "flex-shrink": "1",
                                "flex-basis": "200px",
                                "max-width": "240px",
                                "padding-top": "20px",
                                "padding-right": "20px",
                                "padding-bottom": "20px",
                                "padding-left": "20px",
                                "border-right-width": "1px",
                                "border-right-style": "solid",
                                "border-right-color": "#ECEEE8",
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "4px",
                                "column-gap": "4px",
                                "background-color": "#FAFBF8"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-19",
                                "style": {
                                  "base": {
                                    "padding-top": "10px",
                                    "padding-right": "12px",
                                    "padding-bottom": "10px",
                                    "padding-left": "12px",
                                    "border-top-left-radius": "8px",
                                    "border-top-right-radius": "8px",
                                    "border-bottom-right-radius": "8px",
                                    "border-bottom-left-radius": "8px",
                                    "font-size": "14px",
                                    "background-color": "#E8ECFE",
                                    "color": "#2D4BF0",
                                    "font-weight": "500"
                                  }
                                },
                                "text": "Schedule"
                              },
                              {
                                "tag": "div",
                                "key": "div-20",
                                "style": {
                                  "base": {
                                    "padding-top": "10px",
                                    "padding-right": "12px",
                                    "padding-bottom": "10px",
                                    "padding-left": "12px",
                                    "border-top-left-radius": "8px",
                                    "border-top-right-radius": "8px",
                                    "border-bottom-right-radius": "8px",
                                    "border-bottom-left-radius": "8px",
                                    "font-size": "14px",
                                    "background-color": "transparent",
                                    "color": "#4E545D",
                                    "font-weight": "500"
                                  }
                                },
                                "text": "Route"
                              },
                              {
                                "tag": "div",
                                "key": "div-21",
                                "style": {
                                  "base": {
                                    "padding-top": "10px",
                                    "padding-right": "12px",
                                    "padding-bottom": "10px",
                                    "padding-left": "12px",
                                    "border-top-left-radius": "8px",
                                    "border-top-right-radius": "8px",
                                    "border-bottom-right-radius": "8px",
                                    "border-bottom-left-radius": "8px",
                                    "font-size": "14px",
                                    "background-color": "transparent",
                                    "color": "#4E545D",
                                    "font-weight": "500"
                                  }
                                },
                                "text": "Invoice"
                              },
                              {
                                "tag": "div",
                                "key": "div-22",
                                "style": {
                                  "base": {
                                    "padding-top": "10px",
                                    "padding-right": "12px",
                                    "padding-bottom": "10px",
                                    "padding-left": "12px",
                                    "border-top-left-radius": "8px",
                                    "border-top-right-radius": "8px",
                                    "border-bottom-right-radius": "8px",
                                    "border-bottom-left-radius": "8px",
                                    "font-size": "14px",
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "Customers"
                              },
                              {
                                "tag": "div",
                                "key": "div-23",
                                "style": {
                                  "base": {
                                    "padding-top": "10px",
                                    "padding-right": "12px",
                                    "padding-bottom": "10px",
                                    "padding-left": "12px",
                                    "border-top-left-radius": "8px",
                                    "border-top-right-radius": "8px",
                                    "border-bottom-right-radius": "8px",
                                    "border-bottom-left-radius": "8px",
                                    "font-size": "14px",
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "Reports"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-49",
                            "style": {
                              "base": {
                                "flex-grow": "999",
                                "flex-shrink": "1",
                                "flex-basis": "520px",
                                "min-width": "0",
                                "padding-top": "24px",
                                "padding-right": "24px",
                                "padding-bottom": "24px",
                                "padding-left": "24px",
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "16px",
                                "column-gap": "16px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-27",
                                "style": {
                                  "base": {
                                    "display": "flex",
                                    "justify-content": "space-between",
                                    "align-items": "baseline",
                                    "row-gap": "16px",
                                    "column-gap": "16px",
                                    "flex-wrap": "wrap"
                                  }
                                },
                                "children": [
                                  {
                                    "tag": "div",
                                    "key": "div-25",
                                    "style": {
                                      "base": {
                                        "font-size": "22px",
                                        "font-weight": "600",
                                        "letter-spacing": "-0.02em"
                                      }
                                    },
                                    "text": "Today, Tuesday"
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-26",
                                    "style": {
                                      "base": {
                                        "font-family": "token(font-saas-mono)",
                                        "font-size": "12px",
                                        "color": "#5B616B"
                                      }
                                    },
                                    "text": "3 crews · 9 jobs"
                                  }
                                ]
                              },
                              {
                                "tag": "div",
                                "key": "div-48",
                                "style": {
                                  "base": {
                                    "display": "flex",
                                    "flex-direction": "column",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#ECEEE8",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#ECEEE8",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#ECEEE8",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#ECEEE8",
                                    "border-top-left-radius": "12px",
                                    "border-top-right-radius": "12px",
                                    "border-bottom-right-radius": "12px",
                                    "border-bottom-left-radius": "12px",
                                    "overflow": "hidden"
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
                                        "align-items": "center",
                                        "row-gap": "16px",
                                        "column-gap": "16px",
                                        "padding-top": "14px",
                                        "padding-right": "16px",
                                        "padding-bottom": "14px",
                                        "padding-left": "16px",
                                        "border-bottom-width": "1px",
                                        "border-bottom-style": "solid",
                                        "border-bottom-color": "#F0F1EC",
                                        "font-size": "14px"
                                      }
                                    },
                                    "children": [
                                      {
                                        "tag": "div",
                                        "key": "div-28",
                                        "style": {
                                          "base": {
                                            "font-family": "token(font-saas-mono)",
                                            "color": "#5B616B",
                                            "min-width": "64px"
                                          }
                                        },
                                        "text": "08:00"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "div-29",
                                        "style": {
                                          "base": {
                                            "flex-grow": "1",
                                            "flex-shrink": "1",
                                            "flex-basis": "180px",
                                            "font-weight": "500"
                                          }
                                        },
                                        "text": "Hartley residence"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "div-30",
                                        "style": {
                                          "base": {
                                            "flex-grow": "0",
                                            "flex-shrink": "1",
                                            "flex-basis": "160px",
                                            "color": "#4E545D"
                                          }
                                        },
                                        "text": "Crew A · Mowing"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "div-31",
                                        "style": {
                                          "base": {
                                            "padding-top": "4px",
                                            "padding-right": "10px",
                                            "padding-bottom": "4px",
                                            "padding-left": "10px",
                                            "border-top-left-radius": "999px",
                                            "border-top-right-radius": "999px",
                                            "border-bottom-right-radius": "999px",
                                            "border-bottom-left-radius": "999px",
                                            "font-size": "12px",
                                            "font-weight": "500",
                                            "background-color": "#E5F4EA",
                                            "color": "#1D6B3A"
                                          }
                                        },
                                        "text": "Done"
                                      }
                                    ]
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-37",
                                    "style": {
                                      "base": {
                                        "display": "flex",
                                        "flex-wrap": "wrap",
                                        "align-items": "center",
                                        "row-gap": "16px",
                                        "column-gap": "16px",
                                        "padding-top": "14px",
                                        "padding-right": "16px",
                                        "padding-bottom": "14px",
                                        "padding-left": "16px",
                                        "border-bottom-width": "1px",
                                        "border-bottom-style": "solid",
                                        "border-bottom-color": "#F0F1EC",
                                        "font-size": "14px"
                                      }
                                    },
                                    "children": [
                                      {
                                        "tag": "div",
                                        "key": "div-33",
                                        "style": {
                                          "base": {
                                            "font-family": "token(font-saas-mono)",
                                            "color": "#5B616B",
                                            "min-width": "64px"
                                          }
                                        },
                                        "text": "09:30"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "div-34",
                                        "style": {
                                          "base": {
                                            "flex-grow": "1",
                                            "flex-shrink": "1",
                                            "flex-basis": "180px",
                                            "font-weight": "500"
                                          }
                                        },
                                        "text": "Pine St. HOA"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "div-35",
                                        "style": {
                                          "base": {
                                            "flex-grow": "0",
                                            "flex-shrink": "1",
                                            "flex-basis": "160px",
                                            "color": "#4E545D"
                                          }
                                        },
                                        "text": "Crew B · Cleanup"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "div-36",
                                        "style": {
                                          "base": {
                                            "padding-top": "4px",
                                            "padding-right": "10px",
                                            "padding-bottom": "4px",
                                            "padding-left": "10px",
                                            "border-top-left-radius": "999px",
                                            "border-top-right-radius": "999px",
                                            "border-bottom-right-radius": "999px",
                                            "border-bottom-left-radius": "999px",
                                            "font-size": "12px",
                                            "font-weight": "500",
                                            "background-color": "#E8ECFE",
                                            "color": "#2D4BF0"
                                          }
                                        },
                                        "text": "On site"
                                      }
                                    ]
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-42",
                                    "style": {
                                      "base": {
                                        "display": "flex",
                                        "flex-wrap": "wrap",
                                        "align-items": "center",
                                        "row-gap": "16px",
                                        "column-gap": "16px",
                                        "padding-top": "14px",
                                        "padding-right": "16px",
                                        "padding-bottom": "14px",
                                        "padding-left": "16px",
                                        "border-bottom-width": "1px",
                                        "border-bottom-style": "solid",
                                        "border-bottom-color": "#F0F1EC",
                                        "font-size": "14px"
                                      }
                                    },
                                    "children": [
                                      {
                                        "tag": "div",
                                        "key": "div-38",
                                        "style": {
                                          "base": {
                                            "font-family": "token(font-saas-mono)",
                                            "color": "#5B616B",
                                            "min-width": "64px"
                                          }
                                        },
                                        "text": "11:00"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "div-39",
                                        "style": {
                                          "base": {
                                            "flex-grow": "1",
                                            "flex-shrink": "1",
                                            "flex-basis": "180px",
                                            "font-weight": "500"
                                          }
                                        },
                                        "text": "Okafor family"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "div-40",
                                        "style": {
                                          "base": {
                                            "flex-grow": "0",
                                            "flex-shrink": "1",
                                            "flex-basis": "160px",
                                            "color": "#4E545D"
                                          }
                                        },
                                        "text": "Crew A · Planting"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "div-41",
                                        "style": {
                                          "base": {
                                            "padding-top": "4px",
                                            "padding-right": "10px",
                                            "padding-bottom": "4px",
                                            "padding-left": "10px",
                                            "border-top-left-radius": "999px",
                                            "border-top-right-radius": "999px",
                                            "border-bottom-right-radius": "999px",
                                            "border-bottom-left-radius": "999px",
                                            "font-size": "12px",
                                            "font-weight": "500",
                                            "background-color": "#F1F2EE",
                                            "color": "#4E545D"
                                          }
                                        },
                                        "text": "Next"
                                      }
                                    ]
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-47",
                                    "style": {
                                      "base": {
                                        "display": "flex",
                                        "flex-wrap": "wrap",
                                        "align-items": "center",
                                        "row-gap": "16px",
                                        "column-gap": "16px",
                                        "padding-top": "14px",
                                        "padding-right": "16px",
                                        "padding-bottom": "14px",
                                        "padding-left": "16px",
                                        "border-bottom-width": "1px",
                                        "border-bottom-style": "solid",
                                        "border-bottom-color": "#F0F1EC",
                                        "font-size": "14px"
                                      }
                                    },
                                    "children": [
                                      {
                                        "tag": "div",
                                        "key": "div-43",
                                        "style": {
                                          "base": {
                                            "font-family": "token(font-saas-mono)",
                                            "color": "#5B616B",
                                            "min-width": "64px"
                                          }
                                        },
                                        "text": "13:15"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "div-44",
                                        "style": {
                                          "base": {
                                            "flex-grow": "1",
                                            "flex-shrink": "1",
                                            "flex-basis": "180px",
                                            "font-weight": "500"
                                          }
                                        },
                                        "text": "Harbor Dental"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "div-45",
                                        "style": {
                                          "base": {
                                            "flex-grow": "0",
                                            "flex-shrink": "1",
                                            "flex-basis": "160px",
                                            "color": "#4E545D"
                                          }
                                        },
                                        "text": "Crew C · Bins"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "div-46",
                                        "style": {
                                          "base": {
                                            "padding-top": "4px",
                                            "padding-right": "10px",
                                            "padding-bottom": "4px",
                                            "padding-left": "10px",
                                            "border-top-left-radius": "999px",
                                            "border-top-right-radius": "999px",
                                            "border-bottom-right-radius": "999px",
                                            "border-bottom-left-radius": "999px",
                                            "font-size": "12px",
                                            "font-weight": "500",
                                            "background-color": "#F1F2EE",
                                            "color": "#4E545D"
                                          }
                                        },
                                        "text": "Next"
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
                  },
                  {
                    "tag": "div",
                    "key": "div-104",
                    "style": {
                      "base": {
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
                        "border-top-left-radius": "18px",
                        "border-top-right-radius": "18px",
                        "border-bottom-right-radius": "18px",
                        "border-bottom-left-radius": "18px",
                        "box-shadow": "0 30px 60px -30px rgba(15,17,21,0.25)",
                        "overflow": "hidden",
                        "display": "none"
                      }
                    },
                    "attrs": {
                      "role": "tabpanel",
                      "data-blok-panel": "",
                      "data-display": "block"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-71",
                        "style": {
                          "base": {
                            "display": "flex",
                            "align-items": "center",
                            "row-gap": "8px",
                            "column-gap": "8px",
                            "padding-top": "12px",
                            "padding-right": "16px",
                            "padding-bottom": "12px",
                            "padding-left": "16px",
                            "border-bottom-width": "1px",
                            "border-bottom-style": "solid",
                            "border-bottom-color": "#ECEEE8"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-67",
                            "style": {
                              "base": {
                                "width": "10px",
                                "height": "10px",
                                "border-top-left-radius": "50%",
                                "border-top-right-radius": "50%",
                                "border-bottom-right-radius": "50%",
                                "border-bottom-left-radius": "50%",
                                "background-color": "#E2E4DE"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-68",
                            "style": {
                              "base": {
                                "width": "10px",
                                "height": "10px",
                                "border-top-left-radius": "50%",
                                "border-top-right-radius": "50%",
                                "border-bottom-right-radius": "50%",
                                "border-bottom-left-radius": "50%",
                                "background-color": "#E2E4DE"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-69",
                            "style": {
                              "base": {
                                "width": "10px",
                                "height": "10px",
                                "border-top-left-radius": "50%",
                                "border-top-right-radius": "50%",
                                "border-bottom-right-radius": "50%",
                                "border-bottom-left-radius": "50%",
                                "background-color": "#E2E4DE"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-70",
                            "style": {
                              "base": {
                                "margin-left": "12px",
                                "font-family": "token(font-saas-mono)",
                                "font-size": "12px",
                                "color": "#5B616B"
                              }
                            },
                            "text": "app.harborline.example / routes/crew-a"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-103",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-wrap": "wrap",
                            "min-height": "380px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-77",
                            "style": {
                              "base": {
                                "flex-grow": "1",
                                "flex-shrink": "1",
                                "flex-basis": "200px",
                                "max-width": "240px",
                                "padding-top": "20px",
                                "padding-right": "20px",
                                "padding-bottom": "20px",
                                "padding-left": "20px",
                                "border-right-width": "1px",
                                "border-right-style": "solid",
                                "border-right-color": "#ECEEE8",
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "4px",
                                "column-gap": "4px",
                                "background-color": "#FAFBF8"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-72",
                                "style": {
                                  "base": {
                                    "padding-top": "10px",
                                    "padding-right": "12px",
                                    "padding-bottom": "10px",
                                    "padding-left": "12px",
                                    "border-top-left-radius": "8px",
                                    "border-top-right-radius": "8px",
                                    "border-bottom-right-radius": "8px",
                                    "border-bottom-left-radius": "8px",
                                    "font-size": "14px",
                                    "background-color": "transparent",
                                    "color": "#4E545D",
                                    "font-weight": "500"
                                  }
                                },
                                "text": "Schedule"
                              },
                              {
                                "tag": "div",
                                "key": "div-73",
                                "style": {
                                  "base": {
                                    "padding-top": "10px",
                                    "padding-right": "12px",
                                    "padding-bottom": "10px",
                                    "padding-left": "12px",
                                    "border-top-left-radius": "8px",
                                    "border-top-right-radius": "8px",
                                    "border-bottom-right-radius": "8px",
                                    "border-bottom-left-radius": "8px",
                                    "font-size": "14px",
                                    "background-color": "#E8ECFE",
                                    "color": "#2D4BF0",
                                    "font-weight": "500"
                                  }
                                },
                                "text": "Route"
                              },
                              {
                                "tag": "div",
                                "key": "div-74",
                                "style": {
                                  "base": {
                                    "padding-top": "10px",
                                    "padding-right": "12px",
                                    "padding-bottom": "10px",
                                    "padding-left": "12px",
                                    "border-top-left-radius": "8px",
                                    "border-top-right-radius": "8px",
                                    "border-bottom-right-radius": "8px",
                                    "border-bottom-left-radius": "8px",
                                    "font-size": "14px",
                                    "background-color": "transparent",
                                    "color": "#4E545D",
                                    "font-weight": "500"
                                  }
                                },
                                "text": "Invoice"
                              },
                              {
                                "tag": "div",
                                "key": "div-75",
                                "style": {
                                  "base": {
                                    "padding-top": "10px",
                                    "padding-right": "12px",
                                    "padding-bottom": "10px",
                                    "padding-left": "12px",
                                    "border-top-left-radius": "8px",
                                    "border-top-right-radius": "8px",
                                    "border-bottom-right-radius": "8px",
                                    "border-bottom-left-radius": "8px",
                                    "font-size": "14px",
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "Customers"
                              },
                              {
                                "tag": "div",
                                "key": "div-76",
                                "style": {
                                  "base": {
                                    "padding-top": "10px",
                                    "padding-right": "12px",
                                    "padding-bottom": "10px",
                                    "padding-left": "12px",
                                    "border-top-left-radius": "8px",
                                    "border-top-right-radius": "8px",
                                    "border-bottom-right-radius": "8px",
                                    "border-bottom-left-radius": "8px",
                                    "font-size": "14px",
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "Reports"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-102",
                            "style": {
                              "base": {
                                "flex-grow": "999",
                                "flex-shrink": "1",
                                "flex-basis": "520px",
                                "min-width": "0",
                                "padding-top": "24px",
                                "padding-right": "24px",
                                "padding-bottom": "24px",
                                "padding-left": "24px",
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "16px",
                                "column-gap": "16px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-80",
                                "style": {
                                  "base": {
                                    "display": "flex",
                                    "justify-content": "space-between",
                                    "align-items": "baseline",
                                    "row-gap": "16px",
                                    "column-gap": "16px",
                                    "flex-wrap": "wrap"
                                  }
                                },
                                "children": [
                                  {
                                    "tag": "div",
                                    "key": "div-78",
                                    "style": {
                                      "base": {
                                        "font-size": "22px",
                                        "font-weight": "600",
                                        "letter-spacing": "-0.02em"
                                      }
                                    },
                                    "text": "Crew A route"
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-79",
                                    "style": {
                                      "base": {
                                        "font-family": "token(font-saas-mono)",
                                        "font-size": "12px",
                                        "color": "#5B616B"
                                      }
                                    },
                                    "text": "Optimized order"
                                  }
                                ]
                              },
                              {
                                "tag": "div",
                                "key": "div-101",
                                "style": {
                                  "base": {
                                    "display": "flex",
                                    "flex-direction": "column",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#ECEEE8",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#ECEEE8",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#ECEEE8",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#ECEEE8",
                                    "border-top-left-radius": "12px",
                                    "border-top-right-radius": "12px",
                                    "border-bottom-right-radius": "12px",
                                    "border-bottom-left-radius": "12px",
                                    "overflow": "hidden"
                                  }
                                },
                                "children": [
                                  {
                                    "tag": "div",
                                    "key": "div-85",
                                    "style": {
                                      "base": {
                                        "display": "flex",
                                        "flex-wrap": "wrap",
                                        "align-items": "center",
                                        "row-gap": "16px",
                                        "column-gap": "16px",
                                        "padding-top": "14px",
                                        "padding-right": "16px",
                                        "padding-bottom": "14px",
                                        "padding-left": "16px",
                                        "border-bottom-width": "1px",
                                        "border-bottom-style": "solid",
                                        "border-bottom-color": "#F0F1EC",
                                        "font-size": "14px"
                                      }
                                    },
                                    "children": [
                                      {
                                        "tag": "div",
                                        "key": "div-81",
                                        "style": {
                                          "base": {
                                            "font-family": "token(font-saas-mono)",
                                            "color": "#5B616B",
                                            "min-width": "64px"
                                          }
                                        },
                                        "text": "Stop 1"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "div-82",
                                        "style": {
                                          "base": {
                                            "flex-grow": "1",
                                            "flex-shrink": "1",
                                            "flex-basis": "180px",
                                            "font-weight": "500"
                                          }
                                        },
                                        "text": "12 Granite Ln"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "div-83",
                                        "style": {
                                          "base": {
                                            "flex-grow": "0",
                                            "flex-shrink": "1",
                                            "flex-basis": "160px",
                                            "color": "#4E545D"
                                          }
                                        },
                                        "text": "Arrive 08:00"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "div-84",
                                        "style": {
                                          "base": {
                                            "padding-top": "4px",
                                            "padding-right": "10px",
                                            "padding-bottom": "4px",
                                            "padding-left": "10px",
                                            "border-top-left-radius": "999px",
                                            "border-top-right-radius": "999px",
                                            "border-bottom-right-radius": "999px",
                                            "border-bottom-left-radius": "999px",
                                            "font-size": "12px",
                                            "font-weight": "500",
                                            "background-color": "#E5F4EA",
                                            "color": "#1D6B3A"
                                          }
                                        },
                                        "text": "Done"
                                      }
                                    ]
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-90",
                                    "style": {
                                      "base": {
                                        "display": "flex",
                                        "flex-wrap": "wrap",
                                        "align-items": "center",
                                        "row-gap": "16px",
                                        "column-gap": "16px",
                                        "padding-top": "14px",
                                        "padding-right": "16px",
                                        "padding-bottom": "14px",
                                        "padding-left": "16px",
                                        "border-bottom-width": "1px",
                                        "border-bottom-style": "solid",
                                        "border-bottom-color": "#F0F1EC",
                                        "font-size": "14px"
                                      }
                                    },
                                    "children": [
                                      {
                                        "tag": "div",
                                        "key": "div-86",
                                        "style": {
                                          "base": {
                                            "font-family": "token(font-saas-mono)",
                                            "color": "#5B616B",
                                            "min-width": "64px"
                                          }
                                        },
                                        "text": "Stop 2"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "div-87",
                                        "style": {
                                          "base": {
                                            "flex-grow": "1",
                                            "flex-shrink": "1",
                                            "flex-basis": "180px",
                                            "font-weight": "500"
                                          }
                                        },
                                        "text": "48 Harbor Way"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "div-88",
                                        "style": {
                                          "base": {
                                            "flex-grow": "0",
                                            "flex-shrink": "1",
                                            "flex-basis": "160px",
                                            "color": "#4E545D"
                                          }
                                        },
                                        "text": "Arrive 09:05"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "div-89",
                                        "style": {
                                          "base": {
                                            "padding-top": "4px",
                                            "padding-right": "10px",
                                            "padding-bottom": "4px",
                                            "padding-left": "10px",
                                            "border-top-left-radius": "999px",
                                            "border-top-right-radius": "999px",
                                            "border-bottom-right-radius": "999px",
                                            "border-bottom-left-radius": "999px",
                                            "font-size": "12px",
                                            "font-weight": "500",
                                            "background-color": "#E8ECFE",
                                            "color": "#2D4BF0"
                                          }
                                        },
                                        "text": "Driving"
                                      }
                                    ]
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-95",
                                    "style": {
                                      "base": {
                                        "display": "flex",
                                        "flex-wrap": "wrap",
                                        "align-items": "center",
                                        "row-gap": "16px",
                                        "column-gap": "16px",
                                        "padding-top": "14px",
                                        "padding-right": "16px",
                                        "padding-bottom": "14px",
                                        "padding-left": "16px",
                                        "border-bottom-width": "1px",
                                        "border-bottom-style": "solid",
                                        "border-bottom-color": "#F0F1EC",
                                        "font-size": "14px"
                                      }
                                    },
                                    "children": [
                                      {
                                        "tag": "div",
                                        "key": "div-91",
                                        "style": {
                                          "base": {
                                            "font-family": "token(font-saas-mono)",
                                            "color": "#5B616B",
                                            "min-width": "64px"
                                          }
                                        },
                                        "text": "Stop 3"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "div-92",
                                        "style": {
                                          "base": {
                                            "flex-grow": "1",
                                            "flex-shrink": "1",
                                            "flex-basis": "180px",
                                            "font-weight": "500"
                                          }
                                        },
                                        "text": "7 Quarry Rd"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "div-93",
                                        "style": {
                                          "base": {
                                            "flex-grow": "0",
                                            "flex-shrink": "1",
                                            "flex-basis": "160px",
                                            "color": "#4E545D"
                                          }
                                        },
                                        "text": "Arrive 10:20"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "div-94",
                                        "style": {
                                          "base": {
                                            "padding-top": "4px",
                                            "padding-right": "10px",
                                            "padding-bottom": "4px",
                                            "padding-left": "10px",
                                            "border-top-left-radius": "999px",
                                            "border-top-right-radius": "999px",
                                            "border-bottom-right-radius": "999px",
                                            "border-bottom-left-radius": "999px",
                                            "font-size": "12px",
                                            "font-weight": "500",
                                            "background-color": "#F1F2EE",
                                            "color": "#4E545D"
                                          }
                                        },
                                        "text": "Next"
                                      }
                                    ]
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-100",
                                    "style": {
                                      "base": {
                                        "display": "flex",
                                        "flex-wrap": "wrap",
                                        "align-items": "center",
                                        "row-gap": "16px",
                                        "column-gap": "16px",
                                        "padding-top": "14px",
                                        "padding-right": "16px",
                                        "padding-bottom": "14px",
                                        "padding-left": "16px",
                                        "border-bottom-width": "1px",
                                        "border-bottom-style": "solid",
                                        "border-bottom-color": "#F0F1EC",
                                        "font-size": "14px"
                                      }
                                    },
                                    "children": [
                                      {
                                        "tag": "div",
                                        "key": "div-96",
                                        "style": {
                                          "base": {
                                            "font-family": "token(font-saas-mono)",
                                            "color": "#5B616B",
                                            "min-width": "64px"
                                          }
                                        },
                                        "text": "Stop 4"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "div-97",
                                        "style": {
                                          "base": {
                                            "flex-grow": "1",
                                            "flex-shrink": "1",
                                            "flex-basis": "180px",
                                            "font-weight": "500"
                                          }
                                        },
                                        "text": "210 Main St"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "div-98",
                                        "style": {
                                          "base": {
                                            "flex-grow": "0",
                                            "flex-shrink": "1",
                                            "flex-basis": "160px",
                                            "color": "#4E545D"
                                          }
                                        },
                                        "text": "Arrive 11:40"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "div-99",
                                        "style": {
                                          "base": {
                                            "padding-top": "4px",
                                            "padding-right": "10px",
                                            "padding-bottom": "4px",
                                            "padding-left": "10px",
                                            "border-top-left-radius": "999px",
                                            "border-top-right-radius": "999px",
                                            "border-bottom-right-radius": "999px",
                                            "border-bottom-left-radius": "999px",
                                            "font-size": "12px",
                                            "font-weight": "500",
                                            "background-color": "#F1F2EE",
                                            "color": "#4E545D"
                                          }
                                        },
                                        "text": "Next"
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
                  },
                  {
                    "tag": "div",
                    "key": "div-157",
                    "style": {
                      "base": {
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
                        "border-top-left-radius": "18px",
                        "border-top-right-radius": "18px",
                        "border-bottom-right-radius": "18px",
                        "border-bottom-left-radius": "18px",
                        "box-shadow": "0 30px 60px -30px rgba(15,17,21,0.25)",
                        "overflow": "hidden",
                        "display": "none"
                      }
                    },
                    "attrs": {
                      "role": "tabpanel",
                      "data-blok-panel": "",
                      "data-display": "block"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-124",
                        "style": {
                          "base": {
                            "display": "flex",
                            "align-items": "center",
                            "row-gap": "8px",
                            "column-gap": "8px",
                            "padding-top": "12px",
                            "padding-right": "16px",
                            "padding-bottom": "12px",
                            "padding-left": "16px",
                            "border-bottom-width": "1px",
                            "border-bottom-style": "solid",
                            "border-bottom-color": "#ECEEE8"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-120",
                            "style": {
                              "base": {
                                "width": "10px",
                                "height": "10px",
                                "border-top-left-radius": "50%",
                                "border-top-right-radius": "50%",
                                "border-bottom-right-radius": "50%",
                                "border-bottom-left-radius": "50%",
                                "background-color": "#E2E4DE"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-121",
                            "style": {
                              "base": {
                                "width": "10px",
                                "height": "10px",
                                "border-top-left-radius": "50%",
                                "border-top-right-radius": "50%",
                                "border-bottom-right-radius": "50%",
                                "border-bottom-left-radius": "50%",
                                "background-color": "#E2E4DE"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-122",
                            "style": {
                              "base": {
                                "width": "10px",
                                "height": "10px",
                                "border-top-left-radius": "50%",
                                "border-top-right-radius": "50%",
                                "border-bottom-right-radius": "50%",
                                "border-bottom-left-radius": "50%",
                                "background-color": "#E2E4DE"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-123",
                            "style": {
                              "base": {
                                "margin-left": "12px",
                                "font-family": "token(font-saas-mono)",
                                "font-size": "12px",
                                "color": "#5B616B"
                              }
                            },
                            "text": "app.harborline.example / invoices"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-156",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-wrap": "wrap",
                            "min-height": "380px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-130",
                            "style": {
                              "base": {
                                "flex-grow": "1",
                                "flex-shrink": "1",
                                "flex-basis": "200px",
                                "max-width": "240px",
                                "padding-top": "20px",
                                "padding-right": "20px",
                                "padding-bottom": "20px",
                                "padding-left": "20px",
                                "border-right-width": "1px",
                                "border-right-style": "solid",
                                "border-right-color": "#ECEEE8",
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "4px",
                                "column-gap": "4px",
                                "background-color": "#FAFBF8"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-125",
                                "style": {
                                  "base": {
                                    "padding-top": "10px",
                                    "padding-right": "12px",
                                    "padding-bottom": "10px",
                                    "padding-left": "12px",
                                    "border-top-left-radius": "8px",
                                    "border-top-right-radius": "8px",
                                    "border-bottom-right-radius": "8px",
                                    "border-bottom-left-radius": "8px",
                                    "font-size": "14px",
                                    "background-color": "transparent",
                                    "color": "#4E545D",
                                    "font-weight": "500"
                                  }
                                },
                                "text": "Schedule"
                              },
                              {
                                "tag": "div",
                                "key": "div-126",
                                "style": {
                                  "base": {
                                    "padding-top": "10px",
                                    "padding-right": "12px",
                                    "padding-bottom": "10px",
                                    "padding-left": "12px",
                                    "border-top-left-radius": "8px",
                                    "border-top-right-radius": "8px",
                                    "border-bottom-right-radius": "8px",
                                    "border-bottom-left-radius": "8px",
                                    "font-size": "14px",
                                    "background-color": "transparent",
                                    "color": "#4E545D",
                                    "font-weight": "500"
                                  }
                                },
                                "text": "Route"
                              },
                              {
                                "tag": "div",
                                "key": "div-127",
                                "style": {
                                  "base": {
                                    "padding-top": "10px",
                                    "padding-right": "12px",
                                    "padding-bottom": "10px",
                                    "padding-left": "12px",
                                    "border-top-left-radius": "8px",
                                    "border-top-right-radius": "8px",
                                    "border-bottom-right-radius": "8px",
                                    "border-bottom-left-radius": "8px",
                                    "font-size": "14px",
                                    "background-color": "#E8ECFE",
                                    "color": "#2D4BF0",
                                    "font-weight": "500"
                                  }
                                },
                                "text": "Invoice"
                              },
                              {
                                "tag": "div",
                                "key": "div-128",
                                "style": {
                                  "base": {
                                    "padding-top": "10px",
                                    "padding-right": "12px",
                                    "padding-bottom": "10px",
                                    "padding-left": "12px",
                                    "border-top-left-radius": "8px",
                                    "border-top-right-radius": "8px",
                                    "border-bottom-right-radius": "8px",
                                    "border-bottom-left-radius": "8px",
                                    "font-size": "14px",
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "Customers"
                              },
                              {
                                "tag": "div",
                                "key": "div-129",
                                "style": {
                                  "base": {
                                    "padding-top": "10px",
                                    "padding-right": "12px",
                                    "padding-bottom": "10px",
                                    "padding-left": "12px",
                                    "border-top-left-radius": "8px",
                                    "border-top-right-radius": "8px",
                                    "border-bottom-right-radius": "8px",
                                    "border-bottom-left-radius": "8px",
                                    "font-size": "14px",
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "Reports"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-155",
                            "style": {
                              "base": {
                                "flex-grow": "999",
                                "flex-shrink": "1",
                                "flex-basis": "520px",
                                "min-width": "0",
                                "padding-top": "24px",
                                "padding-right": "24px",
                                "padding-bottom": "24px",
                                "padding-left": "24px",
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "16px",
                                "column-gap": "16px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-133",
                                "style": {
                                  "base": {
                                    "display": "flex",
                                    "justify-content": "space-between",
                                    "align-items": "baseline",
                                    "row-gap": "16px",
                                    "column-gap": "16px",
                                    "flex-wrap": "wrap"
                                  }
                                },
                                "children": [
                                  {
                                    "tag": "div",
                                    "key": "div-131",
                                    "style": {
                                      "base": {
                                        "font-size": "22px",
                                        "font-weight": "600",
                                        "letter-spacing": "-0.02em"
                                      }
                                    },
                                    "text": "Invoices"
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-132",
                                    "style": {
                                      "base": {
                                        "font-family": "token(font-saas-mono)",
                                        "font-size": "12px",
                                        "color": "#5B616B"
                                      }
                                    },
                                    "text": "Sent when jobs close"
                                  }
                                ]
                              },
                              {
                                "tag": "div",
                                "key": "div-154",
                                "style": {
                                  "base": {
                                    "display": "flex",
                                    "flex-direction": "column",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#ECEEE8",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#ECEEE8",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#ECEEE8",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#ECEEE8",
                                    "border-top-left-radius": "12px",
                                    "border-top-right-radius": "12px",
                                    "border-bottom-right-radius": "12px",
                                    "border-bottom-left-radius": "12px",
                                    "overflow": "hidden"
                                  }
                                },
                                "children": [
                                  {
                                    "tag": "div",
                                    "key": "div-138",
                                    "style": {
                                      "base": {
                                        "display": "flex",
                                        "flex-wrap": "wrap",
                                        "align-items": "center",
                                        "row-gap": "16px",
                                        "column-gap": "16px",
                                        "padding-top": "14px",
                                        "padding-right": "16px",
                                        "padding-bottom": "14px",
                                        "padding-left": "16px",
                                        "border-bottom-width": "1px",
                                        "border-bottom-style": "solid",
                                        "border-bottom-color": "#F0F1EC",
                                        "font-size": "14px"
                                      }
                                    },
                                    "children": [
                                      {
                                        "tag": "div",
                                        "key": "div-134",
                                        "style": {
                                          "base": {
                                            "font-family": "token(font-saas-mono)",
                                            "color": "#5B616B",
                                            "min-width": "64px"
                                          }
                                        },
                                        "text": "#1042"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "div-135",
                                        "style": {
                                          "base": {
                                            "flex-grow": "1",
                                            "flex-shrink": "1",
                                            "flex-basis": "180px",
                                            "font-weight": "500"
                                          }
                                        },
                                        "text": "Hartley residence"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "div-136",
                                        "style": {
                                          "base": {
                                            "flex-grow": "0",
                                            "flex-shrink": "1",
                                            "flex-basis": "160px",
                                            "color": "#4E545D"
                                          }
                                        },
                                        "text": "Mowing, edging"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "div-137",
                                        "style": {
                                          "base": {
                                            "padding-top": "4px",
                                            "padding-right": "10px",
                                            "padding-bottom": "4px",
                                            "padding-left": "10px",
                                            "border-top-left-radius": "999px",
                                            "border-top-right-radius": "999px",
                                            "border-bottom-right-radius": "999px",
                                            "border-bottom-left-radius": "999px",
                                            "font-size": "12px",
                                            "font-weight": "500",
                                            "background-color": "#E5F4EA",
                                            "color": "#1D6B3A"
                                          }
                                        },
                                        "text": "Paid"
                                      }
                                    ]
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-143",
                                    "style": {
                                      "base": {
                                        "display": "flex",
                                        "flex-wrap": "wrap",
                                        "align-items": "center",
                                        "row-gap": "16px",
                                        "column-gap": "16px",
                                        "padding-top": "14px",
                                        "padding-right": "16px",
                                        "padding-bottom": "14px",
                                        "padding-left": "16px",
                                        "border-bottom-width": "1px",
                                        "border-bottom-style": "solid",
                                        "border-bottom-color": "#F0F1EC",
                                        "font-size": "14px"
                                      }
                                    },
                                    "children": [
                                      {
                                        "tag": "div",
                                        "key": "div-139",
                                        "style": {
                                          "base": {
                                            "font-family": "token(font-saas-mono)",
                                            "color": "#5B616B",
                                            "min-width": "64px"
                                          }
                                        },
                                        "text": "#1043"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "div-140",
                                        "style": {
                                          "base": {
                                            "flex-grow": "1",
                                            "flex-shrink": "1",
                                            "flex-basis": "180px",
                                            "font-weight": "500"
                                          }
                                        },
                                        "text": "Pine St. HOA"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "div-141",
                                        "style": {
                                          "base": {
                                            "flex-grow": "0",
                                            "flex-shrink": "1",
                                            "flex-basis": "160px",
                                            "color": "#4E545D"
                                          }
                                        },
                                        "text": "Fall cleanup"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "div-142",
                                        "style": {
                                          "base": {
                                            "padding-top": "4px",
                                            "padding-right": "10px",
                                            "padding-bottom": "4px",
                                            "padding-left": "10px",
                                            "border-top-left-radius": "999px",
                                            "border-top-right-radius": "999px",
                                            "border-bottom-right-radius": "999px",
                                            "border-bottom-left-radius": "999px",
                                            "font-size": "12px",
                                            "font-weight": "500",
                                            "background-color": "#E8ECFE",
                                            "color": "#2D4BF0"
                                          }
                                        },
                                        "text": "Sent"
                                      }
                                    ]
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-148",
                                    "style": {
                                      "base": {
                                        "display": "flex",
                                        "flex-wrap": "wrap",
                                        "align-items": "center",
                                        "row-gap": "16px",
                                        "column-gap": "16px",
                                        "padding-top": "14px",
                                        "padding-right": "16px",
                                        "padding-bottom": "14px",
                                        "padding-left": "16px",
                                        "border-bottom-width": "1px",
                                        "border-bottom-style": "solid",
                                        "border-bottom-color": "#F0F1EC",
                                        "font-size": "14px"
                                      }
                                    },
                                    "children": [
                                      {
                                        "tag": "div",
                                        "key": "div-144",
                                        "style": {
                                          "base": {
                                            "font-family": "token(font-saas-mono)",
                                            "color": "#5B616B",
                                            "min-width": "64px"
                                          }
                                        },
                                        "text": "#1044"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "div-145",
                                        "style": {
                                          "base": {
                                            "flex-grow": "1",
                                            "flex-shrink": "1",
                                            "flex-basis": "180px",
                                            "font-weight": "500"
                                          }
                                        },
                                        "text": "Okafor family"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "div-146",
                                        "style": {
                                          "base": {
                                            "flex-grow": "0",
                                            "flex-shrink": "1",
                                            "flex-basis": "160px",
                                            "color": "#4E545D"
                                          }
                                        },
                                        "text": "Planting"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "div-147",
                                        "style": {
                                          "base": {
                                            "padding-top": "4px",
                                            "padding-right": "10px",
                                            "padding-bottom": "4px",
                                            "padding-left": "10px",
                                            "border-top-left-radius": "999px",
                                            "border-top-right-radius": "999px",
                                            "border-bottom-right-radius": "999px",
                                            "border-bottom-left-radius": "999px",
                                            "font-size": "12px",
                                            "font-weight": "500",
                                            "background-color": "#F1F2EE",
                                            "color": "#4E545D"
                                          }
                                        },
                                        "text": "Draft"
                                      }
                                    ]
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-153",
                                    "style": {
                                      "base": {
                                        "display": "flex",
                                        "flex-wrap": "wrap",
                                        "align-items": "center",
                                        "row-gap": "16px",
                                        "column-gap": "16px",
                                        "padding-top": "14px",
                                        "padding-right": "16px",
                                        "padding-bottom": "14px",
                                        "padding-left": "16px",
                                        "border-bottom-width": "1px",
                                        "border-bottom-style": "solid",
                                        "border-bottom-color": "#F0F1EC",
                                        "font-size": "14px"
                                      }
                                    },
                                    "children": [
                                      {
                                        "tag": "div",
                                        "key": "div-149",
                                        "style": {
                                          "base": {
                                            "font-family": "token(font-saas-mono)",
                                            "color": "#5B616B",
                                            "min-width": "64px"
                                          }
                                        },
                                        "text": "#1039"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "div-150",
                                        "style": {
                                          "base": {
                                            "flex-grow": "1",
                                            "flex-shrink": "1",
                                            "flex-basis": "180px",
                                            "font-weight": "500"
                                          }
                                        },
                                        "text": "Harbor Dental"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "div-151",
                                        "style": {
                                          "base": {
                                            "flex-grow": "0",
                                            "flex-shrink": "1",
                                            "flex-basis": "160px",
                                            "color": "#4E545D"
                                          }
                                        },
                                        "text": "Bin service"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "div-152",
                                        "style": {
                                          "base": {
                                            "padding-top": "4px",
                                            "padding-right": "10px",
                                            "padding-bottom": "4px",
                                            "padding-left": "10px",
                                            "border-top-left-radius": "999px",
                                            "border-top-right-radius": "999px",
                                            "border-bottom-right-radius": "999px",
                                            "border-bottom-left-radius": "999px",
                                            "font-size": "12px",
                                            "font-weight": "500",
                                            "background-color": "#FDEFE4",
                                            "color": "#9A4A12"
                                          }
                                        },
                                        "text": "Due Fri"
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
        ]
      }
    ],
    "attrs": {
      "data-blok-panels": ""
    }
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
