import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "templates-01",
  "prefix": "templates01",
  "name": "Templates / Filter and preview",
  "category": "templates",
  "collection": "saas",
  "description": "Templates / Filter and preview for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "Start from something that already works"
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-3",
        "div-9",
        "div-88"
      ]
    }
  },
  "tree": {
    "role": "section",
    "style": {
      "base": {
        "font-family": "token(font-saas)",
        "color": "#0F1115",
        "background-color": "#FFFFFF",
        "padding-top": "clamp(56px, 8vw, 104px)",
        "padding-right": "clamp(20px, 4vw, 48px)",
        "padding-bottom": "clamp(56px, 8vw, 104px)",
        "padding-left": "clamp(20px, 4vw, 48px)"
      }
    },
    "children": [
      {
        "tag": "div",
        "key": "div-89",
        "style": {
          "base": {
            "max-width": "1200px",
            "margin-top": "0",
            "margin-right": "auto",
            "margin-bottom": "0",
            "margin-left": "auto",
            "display": "flex",
            "flex-direction": "column",
            "row-gap": "32px",
            "column-gap": "32px"
          }
        },
        "children": [
          {
            "tag": "div",
            "key": "div-3",
            "style": {
              "base": {
                "display": "flex",
                "flex-direction": "column",
                "row-gap": "16px",
                "column-gap": "16px",
                "max-width": "640px"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-1",
                "style": {
                  "base": {
                    "font-family": "token(font-saas-mono)",
                    "font-size": "12px",
                    "letter-spacing": "0.08em",
                    "text-transform": "uppercase",
                    "color": "#5B616B"
                  }
                },
                "text": "Templates"
              },
              {
                "tag": "h2",
                "key": "heading",
                "style": {
                  "base": {
                    "margin-top": "0",
                    "margin-right": "0",
                    "margin-bottom": "0",
                    "margin-left": "0",
                    "font-size": "clamp(34px, 4.4vw, 56px)",
                    "line-height": "1.02",
                    "letter-spacing": "-0.04em",
                    "font-weight": "600"
                  }
                },
                "bind": "heading"
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-9",
            "style": {
              "base": {
                "display": "flex",
                "flex-wrap": "wrap",
                "row-gap": "8px",
                "column-gap": "8px"
              }
            },
            "attrs": {
              "role": "group",
              "aria-label": "Filter templates"
            },
            "children": [
              {
                "tag": "div",
                "key": "div-4",
                "style": {
                  "base": {
                    "height": "44px",
                    "padding-top": "0",
                    "padding-right": "18px",
                    "padding-bottom": "0",
                    "padding-left": "18px",
                    "border-top-left-radius": "999px",
                    "border-top-right-radius": "999px",
                    "border-bottom-right-radius": "999px",
                    "border-bottom-left-radius": "999px",
                    "cursor": "pointer",
                    "font-size": "15px",
                    "font-weight": "500",
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
                  "aria-pressed": "true",
                  "data-blok-filter-chip": "all"
                },
                "text": "All"
              },
              {
                "tag": "div",
                "key": "div-5",
                "style": {
                  "base": {
                    "height": "44px",
                    "padding-top": "0",
                    "padding-right": "18px",
                    "padding-bottom": "0",
                    "padding-left": "18px",
                    "border-top-left-radius": "999px",
                    "border-top-right-radius": "999px",
                    "border-bottom-right-radius": "999px",
                    "border-bottom-left-radius": "999px",
                    "cursor": "pointer",
                    "font-size": "15px",
                    "font-weight": "500",
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
                    "background-color": "#FFFFFF",
                    "color": "#0F1115",
                    "display": "flex",
                    "align-items": "center",
                    "justify-content": "center"
                  }
                },
                "attrs": {
                  "aria-pressed": "false",
                  "data-blok-filter-chip": "Quotes"
                },
                "text": "Quotes"
              },
              {
                "tag": "div",
                "key": "div-6",
                "style": {
                  "base": {
                    "height": "44px",
                    "padding-top": "0",
                    "padding-right": "18px",
                    "padding-bottom": "0",
                    "padding-left": "18px",
                    "border-top-left-radius": "999px",
                    "border-top-right-radius": "999px",
                    "border-bottom-right-radius": "999px",
                    "border-bottom-left-radius": "999px",
                    "cursor": "pointer",
                    "font-size": "15px",
                    "font-weight": "500",
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
                    "background-color": "#FFFFFF",
                    "color": "#0F1115",
                    "display": "flex",
                    "align-items": "center",
                    "justify-content": "center"
                  }
                },
                "attrs": {
                  "aria-pressed": "false",
                  "data-blok-filter-chip": "Invoices"
                },
                "text": "Invoices"
              },
              {
                "tag": "div",
                "key": "div-7",
                "style": {
                  "base": {
                    "height": "44px",
                    "padding-top": "0",
                    "padding-right": "18px",
                    "padding-bottom": "0",
                    "padding-left": "18px",
                    "border-top-left-radius": "999px",
                    "border-top-right-radius": "999px",
                    "border-bottom-right-radius": "999px",
                    "border-bottom-left-radius": "999px",
                    "cursor": "pointer",
                    "font-size": "15px",
                    "font-weight": "500",
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
                    "background-color": "#FFFFFF",
                    "color": "#0F1115",
                    "display": "flex",
                    "align-items": "center",
                    "justify-content": "center"
                  }
                },
                "attrs": {
                  "aria-pressed": "false",
                  "data-blok-filter-chip": "Checklists"
                },
                "text": "Checklists"
              },
              {
                "tag": "div",
                "key": "div-8",
                "style": {
                  "base": {
                    "height": "44px",
                    "padding-top": "0",
                    "padding-right": "18px",
                    "padding-bottom": "0",
                    "padding-left": "18px",
                    "border-top-left-radius": "999px",
                    "border-top-right-radius": "999px",
                    "border-bottom-right-radius": "999px",
                    "border-bottom-left-radius": "999px",
                    "cursor": "pointer",
                    "font-size": "15px",
                    "font-weight": "500",
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
                    "background-color": "#FFFFFF",
                    "color": "#0F1115",
                    "display": "flex",
                    "align-items": "center",
                    "justify-content": "center"
                  }
                },
                "attrs": {
                  "aria-pressed": "false",
                  "data-blok-filter-chip": "Messages"
                },
                "text": "Messages"
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-88",
            "style": {
              "base": {
                "display": "flex",
                "flex-wrap": "wrap",
                "row-gap": "20px",
                "column-gap": "20px",
                "align-items": "flex-start"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-82",
                "style": {
                  "base": {
                    "flex-grow": "999",
                    "flex-shrink": "1",
                    "flex-basis": "480px",
                    "min-width": "0",
                    "display": "grid",
                    "grid-template-columns": "1fr",
                    "row-gap": "12px",
                    "column-gap": "12px"
                  },
                  "md": {
                    "grid-template-columns": "repeat(3, minmax(0, 1fr))"
                  },
                  "lg": {
                    "grid-template-columns": "repeat(5, minmax(0, 1fr))"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-18",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "12px",
                        "column-gap": "12px",
                        "padding-top": "14px",
                        "padding-right": "14px",
                        "padding-bottom": "14px",
                        "padding-left": "14px",
                        "border-top-left-radius": "14px",
                        "border-top-right-radius": "14px",
                        "border-bottom-right-radius": "14px",
                        "border-bottom-left-radius": "14px",
                        "cursor": "pointer",
                        "text-align": "left",
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#E2E4DE",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#E2E4DE",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E2E4DE",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#E2E4DE",
                        "background-color": "#FFFFFF",
                        "color": "#0F1115",
                        "align-items": "center",
                        "justify-content": "flex-start"
                      }
                    },
                    "attrs": {
                      "aria-pressed": "false",
                      "data-blok-group": "Quotes",
                      "data-blok-filter-card": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-14",
                        "style": {
                          "base": {
                            "height": "96px",
                            "border-top-left-radius": "9px",
                            "border-top-right-radius": "9px",
                            "border-bottom-right-radius": "9px",
                            "border-bottom-left-radius": "9px",
                            "background-color": "#F4F5F1",
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "6px",
                            "column-gap": "6px",
                            "padding-top": "12px",
                            "padding-right": "12px",
                            "padding-bottom": "12px",
                            "padding-left": "12px",
                            "box-sizing": "border-box"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-10",
                            "style": {
                              "base": {
                                "width": "55%",
                                "height": "8px",
                                "border-top-left-radius": "4px",
                                "border-top-right-radius": "4px",
                                "border-bottom-right-radius": "4px",
                                "border-bottom-left-radius": "4px",
                                "background-color": "#C9CDC4"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-11",
                            "style": {
                              "base": {
                                "width": "80%",
                                "height": "6px",
                                "border-top-left-radius": "3px",
                                "border-top-right-radius": "3px",
                                "border-bottom-right-radius": "3px",
                                "border-bottom-left-radius": "3px",
                                "background-color": "#DDE0D8"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-12",
                            "style": {
                              "base": {
                                "width": "70%",
                                "height": "6px",
                                "border-top-left-radius": "3px",
                                "border-top-right-radius": "3px",
                                "border-bottom-right-radius": "3px",
                                "border-bottom-left-radius": "3px",
                                "background-color": "#DDE0D8"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-13",
                            "style": {
                              "base": {
                                "margin-top": "auto",
                                "width": "34%",
                                "height": "14px",
                                "border-top-left-radius": "4px",
                                "border-top-right-radius": "4px",
                                "border-bottom-right-radius": "4px",
                                "border-bottom-left-radius": "4px",
                                "background-color": "#2D4BF0"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-17",
                        "style": {
                          "base": {
                            "display": "flex",
                            "justify-content": "space-between",
                            "row-gap": "8px",
                            "column-gap": "8px",
                            "align-items": "baseline"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-15",
                            "style": {
                              "base": {
                                "font-weight": "600",
                                "font-size": "15px"
                              }
                            },
                            "text": "Seasonal quote"
                          },
                          {
                            "tag": "div",
                            "key": "div-16",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)",
                                "font-size": "11px",
                                "color": "#5B616B"
                              }
                            },
                            "text": "Quotes"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-27",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "12px",
                        "column-gap": "12px",
                        "padding-top": "14px",
                        "padding-right": "14px",
                        "padding-bottom": "14px",
                        "padding-left": "14px",
                        "border-top-left-radius": "14px",
                        "border-top-right-radius": "14px",
                        "border-bottom-right-radius": "14px",
                        "border-bottom-left-radius": "14px",
                        "cursor": "pointer",
                        "text-align": "left",
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#E2E4DE",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#E2E4DE",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E2E4DE",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#E2E4DE",
                        "background-color": "#FFFFFF",
                        "color": "#0F1115",
                        "align-items": "center",
                        "justify-content": "flex-start"
                      }
                    },
                    "attrs": {
                      "aria-pressed": "false",
                      "data-blok-group": "Quotes",
                      "data-blok-filter-card": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-23",
                        "style": {
                          "base": {
                            "height": "96px",
                            "border-top-left-radius": "9px",
                            "border-top-right-radius": "9px",
                            "border-bottom-right-radius": "9px",
                            "border-bottom-left-radius": "9px",
                            "background-color": "#F4F5F1",
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "6px",
                            "column-gap": "6px",
                            "padding-top": "12px",
                            "padding-right": "12px",
                            "padding-bottom": "12px",
                            "padding-left": "12px",
                            "box-sizing": "border-box"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-19",
                            "style": {
                              "base": {
                                "width": "55%",
                                "height": "8px",
                                "border-top-left-radius": "4px",
                                "border-top-right-radius": "4px",
                                "border-bottom-right-radius": "4px",
                                "border-bottom-left-radius": "4px",
                                "background-color": "#C9CDC4"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-20",
                            "style": {
                              "base": {
                                "width": "80%",
                                "height": "6px",
                                "border-top-left-radius": "3px",
                                "border-top-right-radius": "3px",
                                "border-bottom-right-radius": "3px",
                                "border-bottom-left-radius": "3px",
                                "background-color": "#DDE0D8"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-21",
                            "style": {
                              "base": {
                                "width": "70%",
                                "height": "6px",
                                "border-top-left-radius": "3px",
                                "border-top-right-radius": "3px",
                                "border-bottom-right-radius": "3px",
                                "border-bottom-left-radius": "3px",
                                "background-color": "#DDE0D8"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-22",
                            "style": {
                              "base": {
                                "margin-top": "auto",
                                "width": "34%",
                                "height": "14px",
                                "border-top-left-radius": "4px",
                                "border-top-right-radius": "4px",
                                "border-bottom-right-radius": "4px",
                                "border-bottom-left-radius": "4px",
                                "background-color": "#2D4BF0"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-26",
                        "style": {
                          "base": {
                            "display": "flex",
                            "justify-content": "space-between",
                            "row-gap": "8px",
                            "column-gap": "8px",
                            "align-items": "baseline"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-24",
                            "style": {
                              "base": {
                                "font-weight": "600",
                                "font-size": "15px"
                              }
                            },
                            "text": "One-off quote"
                          },
                          {
                            "tag": "div",
                            "key": "div-25",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)",
                                "font-size": "11px",
                                "color": "#5B616B"
                              }
                            },
                            "text": "Quotes"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-36",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "12px",
                        "column-gap": "12px",
                        "padding-top": "14px",
                        "padding-right": "14px",
                        "padding-bottom": "14px",
                        "padding-left": "14px",
                        "border-top-left-radius": "14px",
                        "border-top-right-radius": "14px",
                        "border-bottom-right-radius": "14px",
                        "border-bottom-left-radius": "14px",
                        "cursor": "pointer",
                        "text-align": "left",
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#E2E4DE",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#E2E4DE",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E2E4DE",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#E2E4DE",
                        "background-color": "#FFFFFF",
                        "color": "#0F1115",
                        "align-items": "center",
                        "justify-content": "flex-start"
                      }
                    },
                    "attrs": {
                      "aria-pressed": "false",
                      "data-blok-group": "Invoices",
                      "data-blok-filter-card": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-32",
                        "style": {
                          "base": {
                            "height": "96px",
                            "border-top-left-radius": "9px",
                            "border-top-right-radius": "9px",
                            "border-bottom-right-radius": "9px",
                            "border-bottom-left-radius": "9px",
                            "background-color": "#F4F5F1",
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "6px",
                            "column-gap": "6px",
                            "padding-top": "12px",
                            "padding-right": "12px",
                            "padding-bottom": "12px",
                            "padding-left": "12px",
                            "box-sizing": "border-box"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-28",
                            "style": {
                              "base": {
                                "width": "55%",
                                "height": "8px",
                                "border-top-left-radius": "4px",
                                "border-top-right-radius": "4px",
                                "border-bottom-right-radius": "4px",
                                "border-bottom-left-radius": "4px",
                                "background-color": "#C9CDC4"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-29",
                            "style": {
                              "base": {
                                "width": "80%",
                                "height": "6px",
                                "border-top-left-radius": "3px",
                                "border-top-right-radius": "3px",
                                "border-bottom-right-radius": "3px",
                                "border-bottom-left-radius": "3px",
                                "background-color": "#DDE0D8"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-30",
                            "style": {
                              "base": {
                                "width": "70%",
                                "height": "6px",
                                "border-top-left-radius": "3px",
                                "border-top-right-radius": "3px",
                                "border-bottom-right-radius": "3px",
                                "border-bottom-left-radius": "3px",
                                "background-color": "#DDE0D8"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-31",
                            "style": {
                              "base": {
                                "margin-top": "auto",
                                "width": "34%",
                                "height": "14px",
                                "border-top-left-radius": "4px",
                                "border-top-right-radius": "4px",
                                "border-bottom-right-radius": "4px",
                                "border-bottom-left-radius": "4px",
                                "background-color": "#1D6B3A"
                              }
                            }
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
                            "row-gap": "8px",
                            "column-gap": "8px",
                            "align-items": "baseline"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-33",
                            "style": {
                              "base": {
                                "font-weight": "600",
                                "font-size": "15px"
                              }
                            },
                            "text": "Recurring invoice"
                          },
                          {
                            "tag": "div",
                            "key": "div-34",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)",
                                "font-size": "11px",
                                "color": "#5B616B"
                              }
                            },
                            "text": "Invoices"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-45",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "12px",
                        "column-gap": "12px",
                        "padding-top": "14px",
                        "padding-right": "14px",
                        "padding-bottom": "14px",
                        "padding-left": "14px",
                        "border-top-left-radius": "14px",
                        "border-top-right-radius": "14px",
                        "border-bottom-right-radius": "14px",
                        "border-bottom-left-radius": "14px",
                        "cursor": "pointer",
                        "text-align": "left",
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#E2E4DE",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#E2E4DE",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E2E4DE",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#E2E4DE",
                        "background-color": "#FFFFFF",
                        "color": "#0F1115",
                        "align-items": "center",
                        "justify-content": "flex-start"
                      }
                    },
                    "attrs": {
                      "aria-pressed": "false",
                      "data-blok-group": "Invoices",
                      "data-blok-filter-card": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-41",
                        "style": {
                          "base": {
                            "height": "96px",
                            "border-top-left-radius": "9px",
                            "border-top-right-radius": "9px",
                            "border-bottom-right-radius": "9px",
                            "border-bottom-left-radius": "9px",
                            "background-color": "#F4F5F1",
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "6px",
                            "column-gap": "6px",
                            "padding-top": "12px",
                            "padding-right": "12px",
                            "padding-bottom": "12px",
                            "padding-left": "12px",
                            "box-sizing": "border-box"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-37",
                            "style": {
                              "base": {
                                "width": "55%",
                                "height": "8px",
                                "border-top-left-radius": "4px",
                                "border-top-right-radius": "4px",
                                "border-bottom-right-radius": "4px",
                                "border-bottom-left-radius": "4px",
                                "background-color": "#C9CDC4"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-38",
                            "style": {
                              "base": {
                                "width": "80%",
                                "height": "6px",
                                "border-top-left-radius": "3px",
                                "border-top-right-radius": "3px",
                                "border-bottom-right-radius": "3px",
                                "border-bottom-left-radius": "3px",
                                "background-color": "#DDE0D8"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-39",
                            "style": {
                              "base": {
                                "width": "70%",
                                "height": "6px",
                                "border-top-left-radius": "3px",
                                "border-top-right-radius": "3px",
                                "border-bottom-right-radius": "3px",
                                "border-bottom-left-radius": "3px",
                                "background-color": "#DDE0D8"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-40",
                            "style": {
                              "base": {
                                "margin-top": "auto",
                                "width": "34%",
                                "height": "14px",
                                "border-top-left-radius": "4px",
                                "border-top-right-radius": "4px",
                                "border-bottom-right-radius": "4px",
                                "border-bottom-left-radius": "4px",
                                "background-color": "#1D6B3A"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-44",
                        "style": {
                          "base": {
                            "display": "flex",
                            "justify-content": "space-between",
                            "row-gap": "8px",
                            "column-gap": "8px",
                            "align-items": "baseline"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-42",
                            "style": {
                              "base": {
                                "font-weight": "600",
                                "font-size": "15px"
                              }
                            },
                            "text": "Job invoice"
                          },
                          {
                            "tag": "div",
                            "key": "div-43",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)",
                                "font-size": "11px",
                                "color": "#5B616B"
                              }
                            },
                            "text": "Invoices"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-54",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "12px",
                        "column-gap": "12px",
                        "padding-top": "14px",
                        "padding-right": "14px",
                        "padding-bottom": "14px",
                        "padding-left": "14px",
                        "border-top-left-radius": "14px",
                        "border-top-right-radius": "14px",
                        "border-bottom-right-radius": "14px",
                        "border-bottom-left-radius": "14px",
                        "cursor": "pointer",
                        "text-align": "left",
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#E2E4DE",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#E2E4DE",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E2E4DE",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#E2E4DE",
                        "background-color": "#FFFFFF",
                        "color": "#0F1115",
                        "align-items": "center",
                        "justify-content": "flex-start"
                      }
                    },
                    "attrs": {
                      "aria-pressed": "false",
                      "data-blok-group": "Checklists",
                      "data-blok-filter-card": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-50",
                        "style": {
                          "base": {
                            "height": "96px",
                            "border-top-left-radius": "9px",
                            "border-top-right-radius": "9px",
                            "border-bottom-right-radius": "9px",
                            "border-bottom-left-radius": "9px",
                            "background-color": "#F4F5F1",
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "6px",
                            "column-gap": "6px",
                            "padding-top": "12px",
                            "padding-right": "12px",
                            "padding-bottom": "12px",
                            "padding-left": "12px",
                            "box-sizing": "border-box"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-46",
                            "style": {
                              "base": {
                                "width": "55%",
                                "height": "8px",
                                "border-top-left-radius": "4px",
                                "border-top-right-radius": "4px",
                                "border-bottom-right-radius": "4px",
                                "border-bottom-left-radius": "4px",
                                "background-color": "#C9CDC4"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-47",
                            "style": {
                              "base": {
                                "width": "80%",
                                "height": "6px",
                                "border-top-left-radius": "3px",
                                "border-top-right-radius": "3px",
                                "border-bottom-right-radius": "3px",
                                "border-bottom-left-radius": "3px",
                                "background-color": "#DDE0D8"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-48",
                            "style": {
                              "base": {
                                "width": "70%",
                                "height": "6px",
                                "border-top-left-radius": "3px",
                                "border-top-right-radius": "3px",
                                "border-bottom-right-radius": "3px",
                                "border-bottom-left-radius": "3px",
                                "background-color": "#DDE0D8"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-49",
                            "style": {
                              "base": {
                                "margin-top": "auto",
                                "width": "34%",
                                "height": "14px",
                                "border-top-left-radius": "4px",
                                "border-top-right-radius": "4px",
                                "border-bottom-right-radius": "4px",
                                "border-bottom-left-radius": "4px",
                                "background-color": "#9A4A12"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-53",
                        "style": {
                          "base": {
                            "display": "flex",
                            "justify-content": "space-between",
                            "row-gap": "8px",
                            "column-gap": "8px",
                            "align-items": "baseline"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-51",
                            "style": {
                              "base": {
                                "font-weight": "600",
                                "font-size": "15px"
                              }
                            },
                            "text": "Mowing checklist"
                          },
                          {
                            "tag": "div",
                            "key": "div-52",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)",
                                "font-size": "11px",
                                "color": "#5B616B"
                              }
                            },
                            "text": "Checklists"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-63",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "12px",
                        "column-gap": "12px",
                        "padding-top": "14px",
                        "padding-right": "14px",
                        "padding-bottom": "14px",
                        "padding-left": "14px",
                        "border-top-left-radius": "14px",
                        "border-top-right-radius": "14px",
                        "border-bottom-right-radius": "14px",
                        "border-bottom-left-radius": "14px",
                        "cursor": "pointer",
                        "text-align": "left",
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#E2E4DE",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#E2E4DE",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E2E4DE",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#E2E4DE",
                        "background-color": "#FFFFFF",
                        "color": "#0F1115",
                        "align-items": "center",
                        "justify-content": "flex-start"
                      }
                    },
                    "attrs": {
                      "aria-pressed": "false",
                      "data-blok-group": "Checklists",
                      "data-blok-filter-card": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-59",
                        "style": {
                          "base": {
                            "height": "96px",
                            "border-top-left-radius": "9px",
                            "border-top-right-radius": "9px",
                            "border-bottom-right-radius": "9px",
                            "border-bottom-left-radius": "9px",
                            "background-color": "#F4F5F1",
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "6px",
                            "column-gap": "6px",
                            "padding-top": "12px",
                            "padding-right": "12px",
                            "padding-bottom": "12px",
                            "padding-left": "12px",
                            "box-sizing": "border-box"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-55",
                            "style": {
                              "base": {
                                "width": "55%",
                                "height": "8px",
                                "border-top-left-radius": "4px",
                                "border-top-right-radius": "4px",
                                "border-bottom-right-radius": "4px",
                                "border-bottom-left-radius": "4px",
                                "background-color": "#C9CDC4"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-56",
                            "style": {
                              "base": {
                                "width": "80%",
                                "height": "6px",
                                "border-top-left-radius": "3px",
                                "border-top-right-radius": "3px",
                                "border-bottom-right-radius": "3px",
                                "border-bottom-left-radius": "3px",
                                "background-color": "#DDE0D8"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-57",
                            "style": {
                              "base": {
                                "width": "70%",
                                "height": "6px",
                                "border-top-left-radius": "3px",
                                "border-top-right-radius": "3px",
                                "border-bottom-right-radius": "3px",
                                "border-bottom-left-radius": "3px",
                                "background-color": "#DDE0D8"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-58",
                            "style": {
                              "base": {
                                "margin-top": "auto",
                                "width": "34%",
                                "height": "14px",
                                "border-top-left-radius": "4px",
                                "border-top-right-radius": "4px",
                                "border-bottom-right-radius": "4px",
                                "border-bottom-left-radius": "4px",
                                "background-color": "#9A4A12"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-62",
                        "style": {
                          "base": {
                            "display": "flex",
                            "justify-content": "space-between",
                            "row-gap": "8px",
                            "column-gap": "8px",
                            "align-items": "baseline"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-60",
                            "style": {
                              "base": {
                                "font-weight": "600",
                                "font-size": "15px"
                              }
                            },
                            "text": "Bin wash checklist"
                          },
                          {
                            "tag": "div",
                            "key": "div-61",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)",
                                "font-size": "11px",
                                "color": "#5B616B"
                              }
                            },
                            "text": "Checklists"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-72",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "12px",
                        "column-gap": "12px",
                        "padding-top": "14px",
                        "padding-right": "14px",
                        "padding-bottom": "14px",
                        "padding-left": "14px",
                        "border-top-left-radius": "14px",
                        "border-top-right-radius": "14px",
                        "border-bottom-right-radius": "14px",
                        "border-bottom-left-radius": "14px",
                        "cursor": "pointer",
                        "text-align": "left",
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#2D4BF0",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#2D4BF0",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#2D4BF0",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#2D4BF0",
                        "background-color": "#FFFFFF",
                        "color": "#0F1115",
                        "align-items": "center",
                        "justify-content": "flex-start"
                      }
                    },
                    "attrs": {
                      "aria-pressed": "true",
                      "data-blok-group": "Messages",
                      "data-blok-filter-card": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-68",
                        "style": {
                          "base": {
                            "height": "96px",
                            "border-top-left-radius": "9px",
                            "border-top-right-radius": "9px",
                            "border-bottom-right-radius": "9px",
                            "border-bottom-left-radius": "9px",
                            "background-color": "#F4F5F1",
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "6px",
                            "column-gap": "6px",
                            "padding-top": "12px",
                            "padding-right": "12px",
                            "padding-bottom": "12px",
                            "padding-left": "12px",
                            "box-sizing": "border-box"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-64",
                            "style": {
                              "base": {
                                "width": "55%",
                                "height": "8px",
                                "border-top-left-radius": "4px",
                                "border-top-right-radius": "4px",
                                "border-bottom-right-radius": "4px",
                                "border-bottom-left-radius": "4px",
                                "background-color": "#C9CDC4"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-65",
                            "style": {
                              "base": {
                                "width": "80%",
                                "height": "6px",
                                "border-top-left-radius": "3px",
                                "border-top-right-radius": "3px",
                                "border-bottom-right-radius": "3px",
                                "border-bottom-left-radius": "3px",
                                "background-color": "#DDE0D8"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-66",
                            "style": {
                              "base": {
                                "width": "70%",
                                "height": "6px",
                                "border-top-left-radius": "3px",
                                "border-top-right-radius": "3px",
                                "border-bottom-right-radius": "3px",
                                "border-bottom-left-radius": "3px",
                                "background-color": "#DDE0D8"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-67",
                            "style": {
                              "base": {
                                "margin-top": "auto",
                                "width": "34%",
                                "height": "14px",
                                "border-top-left-radius": "4px",
                                "border-top-right-radius": "4px",
                                "border-bottom-right-radius": "4px",
                                "border-bottom-left-radius": "4px",
                                "background-color": "#6B32A8"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-71",
                        "style": {
                          "base": {
                            "display": "flex",
                            "justify-content": "space-between",
                            "row-gap": "8px",
                            "column-gap": "8px",
                            "align-items": "baseline"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-69",
                            "style": {
                              "base": {
                                "font-weight": "600",
                                "font-size": "15px"
                              }
                            },
                            "text": "Visit reminder"
                          },
                          {
                            "tag": "div",
                            "key": "div-70",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)",
                                "font-size": "11px",
                                "color": "#5B616B"
                              }
                            },
                            "text": "Messages"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-81",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "12px",
                        "column-gap": "12px",
                        "padding-top": "14px",
                        "padding-right": "14px",
                        "padding-bottom": "14px",
                        "padding-left": "14px",
                        "border-top-left-radius": "14px",
                        "border-top-right-radius": "14px",
                        "border-bottom-right-radius": "14px",
                        "border-bottom-left-radius": "14px",
                        "cursor": "pointer",
                        "text-align": "left",
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#E2E4DE",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#E2E4DE",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E2E4DE",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#E2E4DE",
                        "background-color": "#FFFFFF",
                        "color": "#0F1115",
                        "align-items": "center",
                        "justify-content": "flex-start"
                      }
                    },
                    "attrs": {
                      "aria-pressed": "false",
                      "data-blok-group": "Messages",
                      "data-blok-filter-card": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-77",
                        "style": {
                          "base": {
                            "height": "96px",
                            "border-top-left-radius": "9px",
                            "border-top-right-radius": "9px",
                            "border-bottom-right-radius": "9px",
                            "border-bottom-left-radius": "9px",
                            "background-color": "#F4F5F1",
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "6px",
                            "column-gap": "6px",
                            "padding-top": "12px",
                            "padding-right": "12px",
                            "padding-bottom": "12px",
                            "padding-left": "12px",
                            "box-sizing": "border-box"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-73",
                            "style": {
                              "base": {
                                "width": "55%",
                                "height": "8px",
                                "border-top-left-radius": "4px",
                                "border-top-right-radius": "4px",
                                "border-bottom-right-radius": "4px",
                                "border-bottom-left-radius": "4px",
                                "background-color": "#C9CDC4"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-74",
                            "style": {
                              "base": {
                                "width": "80%",
                                "height": "6px",
                                "border-top-left-radius": "3px",
                                "border-top-right-radius": "3px",
                                "border-bottom-right-radius": "3px",
                                "border-bottom-left-radius": "3px",
                                "background-color": "#DDE0D8"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-75",
                            "style": {
                              "base": {
                                "width": "70%",
                                "height": "6px",
                                "border-top-left-radius": "3px",
                                "border-top-right-radius": "3px",
                                "border-bottom-right-radius": "3px",
                                "border-bottom-left-radius": "3px",
                                "background-color": "#DDE0D8"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-76",
                            "style": {
                              "base": {
                                "margin-top": "auto",
                                "width": "34%",
                                "height": "14px",
                                "border-top-left-radius": "4px",
                                "border-top-right-radius": "4px",
                                "border-bottom-right-radius": "4px",
                                "border-bottom-left-radius": "4px",
                                "background-color": "#6B32A8"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-80",
                        "style": {
                          "base": {
                            "display": "flex",
                            "justify-content": "space-between",
                            "row-gap": "8px",
                            "column-gap": "8px",
                            "align-items": "baseline"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-78",
                            "style": {
                              "base": {
                                "font-weight": "600",
                                "font-size": "15px"
                              }
                            },
                            "text": "On the way"
                          },
                          {
                            "tag": "div",
                            "key": "div-79",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)",
                                "font-size": "11px",
                                "color": "#5B616B"
                              }
                            },
                            "text": "Messages"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-87",
                "style": {
                  "base": {
                    "flex-grow": "1",
                    "flex-shrink": "1",
                    "flex-basis": "320px",
                    "padding-top": "22px",
                    "padding-right": "22px",
                    "padding-bottom": "22px",
                    "padding-left": "22px",
                    "border-top-left-radius": "18px",
                    "border-top-right-radius": "18px",
                    "border-bottom-right-radius": "18px",
                    "border-bottom-left-radius": "18px",
                    "background-color": "#0F1115",
                    "color": "#F4F5F1",
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "16px",
                    "column-gap": "16px"
                  }
                },
                "attrs": {
                  "aria-label": "Template preview"
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-83",
                    "style": {
                      "base": {
                        "font-family": "token(font-saas-mono)",
                        "font-size": "11px",
                        "letter-spacing": "0.08em",
                        "text-transform": "uppercase",
                        "color": "#A7ADB6"
                      }
                    },
                    "text": "Messages template"
                  },
                  {
                    "tag": "div",
                    "key": "div-84",
                    "style": {
                      "base": {
                        "font-size": "22px",
                        "font-weight": "600",
                        "letter-spacing": "-0.02em"
                      }
                    },
                    "text": "Visit reminder"
                  },
                  {
                    "tag": "div",
                    "key": "div-85",
                    "style": {
                      "base": {
                        "padding-top": "16px",
                        "padding-right": "16px",
                        "padding-bottom": "16px",
                        "padding-left": "16px",
                        "border-top-left-radius": "12px",
                        "border-top-right-radius": "12px",
                        "border-bottom-right-radius": "12px",
                        "border-bottom-left-radius": "12px",
                        "background-color": "#FFFFFF",
                        "color": "#0F1115",
                        "font-size": "14px",
                        "line-height": "1.6",
                        "white-space": "pre-line"
                      }
                    },
                    "text": "Hi {first name}, your crew arrives tomorrow between {window}. Reply C to confirm or R to reschedule."
                  },
                  {
                    "tag": "div",
                    "key": "div-86",
                    "style": {
                      "base": {
                        "height": "48px",
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
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
                        "cursor": "pointer",
                        "font-weight": "500",
                        "background-color": "#F4F5F1",
                        "color": "#0F1115",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "text": "Use this template"
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    "attrs": {
      "data-blok-filter": ""
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
